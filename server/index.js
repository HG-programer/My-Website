// Simple Express proxy to Hugging Face Inference API
// Requires env: HF_API_TOKEN, optional: HF_MODEL (default: mistralai/Mistral-7B-Instruct-v0.2)

const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();
app.use(express.json({ limit: '2mb' }));

const MODEL = process.env.HF_MODEL || 'mistralai/Mistral-7B-Instruct-v0.2';

const SYSTEM_PROFILE = `You are a concise bilingual (English and Japanese) assistant about Harshit Gupta.
Only answer questions related to: Harshit's background, projects (Haru-GPT, InsightLens, TaskNova), skills (React, TypeScript, Python, Java, Generative AI, AWS fundamentals), Japan vision, certifications, contact.
If user asks outside scope politely redirect to allowed topics.
Keep answers <= 80 tokens, no markdown code fences unless explicitly asked.
`; // Keep short for cheap tokens

app.post('/api/chat', async (req, res) => {
  const { message, history = [] } = req.body || {};
  if (!message) return res.status(400).json({ error: 'message required' });
  if (!process.env.HF_API_TOKEN) return res.status(500).json({ error: 'Server not configured' });

  // Build simple prompt (can be improved with chat templates per model)
  const conversation = [
    { role: 'system', content: SYSTEM_PROFILE },
    ...history.slice(-6), // last few turns only
    { role: 'user', content: message }
  ];

  try {
    const response = await fetch(`https://api-inference.huggingface.co/models/${encodeURIComponent(MODEL)}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HF_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inputs: conversation.map(m => `${m.role.toUpperCase()}: ${m.content}`).join('\n') + '\nASSISTANT:',
        parameters: {
          max_new_tokens: 120,
          temperature: 0.7,
          top_p: 0.9,
          repetition_penalty: 1.05,
          return_full_text: false
        }
      })
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(502).json({ error: 'Upstream error', detail: text });
    }
    const data = await response.json();
    // HF text-generation returns array of objects sometimes
    const generated = Array.isArray(data) ? (data[0]?.generated_text || '') : (data.generated_text || JSON.stringify(data));
    const cleaned = generated.replace(/^(ASSISTANT:)/i, '').trim();
    res.json({ reply: cleaned });
  } catch (e) {
    res.status(500).json({ error: 'proxy_failure', detail: e.message });
  }
});

app.get('/api/health', (_req, res) => res.json({ ok: true, model: MODEL }));

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => console.log('Chat proxy listening on', PORT));
