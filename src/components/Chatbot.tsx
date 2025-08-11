import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface ChatMessage { id: string; role: 'user' | 'assistant'; text: string; ts: number; }
interface IntentDef { id: string; keywords: string[]; responseKey: string; }

const intents: IntentDef[] = [
  { id: 'greet', keywords: ['hello','hi','hey','こんにちは','やあ'], responseKey: 'chatbot.intents.greet' },
  { id: 'projects', keywords: ['project','projects','portfolio','作品','プロジェクト'], responseKey: 'chatbot.intents.projects' },
  { id: 'skills', keywords: ['skill','skills','tech','stack','スキル','技術'], responseKey: 'chatbot.intents.skills' },
  { id: 'contact', keywords: ['contact','email','reach','連絡','メール'], responseKey: 'chatbot.intents.contact' },
];

const fallbackKey = 'chatbot.intents.fallback';

const Chatbot: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'assistant', text: t('chatbot.ui.welcome'), ts: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const API_URL = (import.meta as any)?.env?.VITE_CHAT_API_URL || '/api/chat';

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  useEffect(() => {
    // Add lightweight notice when language changes (not persisted)
    setMessages(msgs => [...msgs, { id: 'lang-' + i18n.language + '-' + Date.now(), role: 'assistant', text: t('chatbot.ui.languageChanged', { lng: i18n.language }), ts: Date.now() }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  // Simple knowledge base: patterns -> dynamic answer function (multi‑lingual keywords)
  const knowledgeBase: { id: string; keywords: string[]; answer: () => string }[] = [
    {
      id: 'about',
      keywords: ['who are you','about you','your profile','あなたは','プロフィール','紹介','who r u'],
      answer: () => t('hero.intro')
    },
    {
      id: 'skills',
      keywords: ['skill','skills','stack','tech','スキル','技術','技術スタック'],
      answer: () => [
        t('about.techStack.languagesList'),
        t('about.techStack.frameworksList'),
        t('about.techStack.domainsList'),
        t('about.techStack.toolsList')
      ].join(' | ')
    },
    {
      id: 'projects',
      keywords: ['project','projects','portfolio','作品','プロジェクト'],
      answer: () => [t('projects.items.haru.title'), t('projects.items.insight.title'), t('projects.items.tasknova.title')].join(', ')
    },
    {
      id: 'japan',
      keywords: ['japan','日本','日本語','japanese vision','japan vision'],
      answer: () => t('japan.quote')
    },
    {
      id: 'certs',
      keywords: ['cert','certs','certification','資格','認定'],
      answer: () => t('certifications.subtitle')
    },
    {
      id: 'contact',
      keywords: ['contact','email','reach','連絡','メール'],
      answer: () => t('contact.intro')
    }
  ];

  const detectKnowledge = (text: string) => {
    const lower = text.toLowerCase();
    return knowledgeBase.find(k => k.keywords.some(kw => lower.includes(kw.toLowerCase())));
  };

  const detectIntent = (text: string): IntentDef | undefined => {
    const lower = text.toLowerCase();
    return intents.find(intent => intent.keywords.some(k => lower.includes(k.toLowerCase())));
  };

  const buildAssistantReply = (query: string): string => {
    const kb = detectKnowledge(query);
    if (kb) return kb.answer();
    const intent = detectIntent(query);
    return t(intent ? intent.responseKey : fallbackKey);
  };

  // Placeholder for future real AI integration
  // async function getAIResponse(history: ChatMessage[], userText: string): Promise<string> {
  //   return buildAssistantReply(userText); // Swap with real API later
  // }

  const send = async () => {
    if (!input.trim()) return;
    const userText = input.trim();
    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: 'user', text: userText, ts: Date.now() };
    setMessages(m => [...m, userMsg]);
    setInput('');
    setThinking(true);
    const started = performance.now();
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText, history: messages.slice(-6).map(m => ({ role: m.role, content: m.text })) })
      });
      const ms = Math.round(performance.now() - started);
      if (res.ok) {
        let data: any = null;
        try { data = await res.json(); } catch { /* ignore parse */ }
        if (data?.reply) {
          console.debug('[chatbot] remote reply', { ms, length: data.reply.length });
            setMessages(m => [...m, { id: crypto.randomUUID(), role: 'assistant', text: data.reply, ts: Date.now() }]);
            setThinking(false);
            return;
        } else {
          console.warn('[chatbot] empty remote reply', { ms, status: res.status });
        }
      } else {
        let detail = '';
        try { detail = await res.text(); } catch { /* ignore */ }
        console.warn('[chatbot] upstream non-ok', { status: res.status, detail });
      }
      // fallback (remote failed or empty)
      const replyText = buildAssistantReply(userText);
      setMessages(m => [...m, { id: crypto.randomUUID(), role: 'assistant', text: replyText + ' (fallback)', ts: Date.now() }]);
    } catch (e: any) {
      console.error('[chatbot] network error', e);
      const replyText = buildAssistantReply(userText);
      setMessages(m => [...m, { id: crypto.randomUUID(), role: 'assistant', text: replyText + ' (offline)', ts: Date.now() }]);
    } finally {
      setThinking(false);
    }
  };

  const suggestions = ['greet','projects','skills','contact'];

  return (
    <>
      <button
        aria-label={t('chatbot.ui.openButton')}
        onClick={() => setOpen(o => !o)}
        className="fixed z-40 bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-fuchsia-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/40 flex items-center justify-center hover:scale-105 transition"
      >
        {open ? '×' : 'AI'}
      </button>
      {open && (
        <div className="fixed z-40 bottom-24 right-6 w-80 max-h-[70vh] flex flex-col rounded-xl backdrop-blur-md bg-slate-900/70 border border-cyan-500/30 shadow-lg shadow-fuchsia-500/30">
          <div className="flex items-center justify-between px-4 py-2 border-b border-cyan-500/30">
            <h2 className="text-sm font-semibold text-cyan-200">{t('chatbot.ui.title')}</h2>
            <button onClick={() => setOpen(false)} aria-label={t('chatbot.ui.close')} className="text-cyan-300 hover:text-pink-300">×</button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm">
            {messages.map(m => (
              <div key={m.id} className={`flex ${m.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
                <div className={`px-3 py-2 rounded-lg max-w-[70%] leading-snug ${m.role === 'assistant' ? 'bg-slate-800/70 text-cyan-100 border border-cyan-500/30' : 'bg-gradient-to-br from-fuchsia-600 to-cyan-600 text-white shadow'} `}>
                  {m.text}
                </div>
              </div>
            ))}
            {thinking && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-lg bg-slate-800/70 text-cyan-100 border border-cyan-500/30 animate-pulse">{t('chatbot.ui.thinking')}</div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <div className="px-3 pb-2">
            <div className="flex flex-wrap gap-2 mb-2">
              {suggestions.map(s => (
                <button key={s} onClick={() => { setInput(t('chatbot.suggestions.'+s)); setTimeout(send, 10); }} className="text-xs px-2 py-1 rounded-full bg-slate-800/70 border border-cyan-500/30 text-cyan-200 hover:bg-cyan-600/30 transition">
                  {t('chatbot.suggestions.'+s)}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') send(); }}
                placeholder={t('chatbot.ui.placeholder')}
                className="flex-1 bg-slate-800/70 border border-cyan-500/30 rounded-lg px-3 py-2 text-sm text-cyan-100 placeholder-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
              />
              <button onClick={send} className="px-4 py-2 rounded-lg bg-gradient-to-br from-cyan-600 to-fuchsia-600 text-white text-sm font-medium disabled:opacity-40" disabled={!input.trim() || thinking}>{t('chatbot.ui.send')}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
