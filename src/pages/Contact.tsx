import React, { useState } from 'react';
import PageSection from '../components/PageSection';

// Replace with your Formspree (or other provider) endpoint after creating the form
const FORM_ENDPOINT = 'https://formspree.io/f/yourEndpoint';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <PageSection id="contact">
      <h2 className="text-4xl font-bold mb-6 text-blue-700">Contact</h2>
      <p className="text-lg text-gray-700 max-w-2xl mb-8">
        Interested in working together or have a question? Reach out!
      </p>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
        <input type="text" name="name" placeholder="Your Name" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <input type="email" name="email" placeholder="Your Email" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <textarea name="message" placeholder="Your Message" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={5} required />
        <button type="submit" disabled={status==='submitting'} className="bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3 rounded hover:bg-blue-700 transition">
          {status==='submitting' ? 'Sending...' : 'Send Message'}
        </button>
        {status==='success' && <p className="text-green-600 text-sm">Message sent! I will get back to you soon.</p>}
        {status==='error' && <p className="text-red-600 text-sm">Something went wrong. Please try again later.</p>}
      </form>
    </PageSection>
  );
};

export default Contact;
