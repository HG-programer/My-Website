import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation, Trans } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
  <section className="cyber-grid min-h-screen flex flex-col items-center justify-center py-12 text-gray-100 overflow-hidden">
    <Helmet>
      <title>{t('contact.meta.title')}</title>
      <meta name="description" content={t('contact.meta.description')} />
    </Helmet>
    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{t('contact.title')}</h1>
      <div className="glass p-8 rounded-2xl mb-8 hover:scale-105 transition-all duration-300 neon-border">
        <p className="text-gray-300 text-lg leading-relaxed mb-6"><Trans i18nKey="contact.intro" components={{ strong: <strong className="text-cyan-400" /> }} /></p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <a href="mailto:harshitg933@gmail.com" className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 neon-border group block">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📧</div>
          <h3 className="text-cyan-400 font-semibold text-xl mb-2">{t('contact.email.title')}</h3>
          <p className="text-gray-300 text-sm">{t('contact.email.value')}</p>
        </a>
        <a href="https://github.com/HG-programer" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 neon-border group block">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🐙</div>
            <h3 className="text-cyan-400 font-semibold text-xl mb-2">{t('contact.github.title')}</h3>
          <p className="text-gray-300 text-sm">{t('contact.github.value')}</p>
        </a>
        <a href="https://www.linkedin.com/in/harshit-gupta-ai-developer" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 neon-border group block">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💼</div>
          <h3 className="text-cyan-400 font-semibold text-xl mb-2">{t('contact.linkedin.title')}</h3>
          <p className="text-gray-300 text-sm">{t('contact.linkedin.value')}</p>
        </a>
      </div>
      <div className="glass p-8 rounded-2xl neon-border">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t('contact.build.title')}</h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div>
            <h3 className="text-cyan-400 font-semibold mb-2">{t('contact.areas.ai.title')}</h3>
            <p className="text-gray-300 text-sm">{t('contact.areas.ai.desc')}</p>
          </div>
          <div>
            <h3 className="text-cyan-400 font-semibold mb-2">{t('contact.areas.fullstack.title')}</h3>
            <p className="text-gray-300 text-sm">{t('contact.areas.fullstack.desc')}</p>
          </div>
          <div>
            <h3 className="text-cyan-400 font-semibold mb-2">{t('contact.areas.cloud.title')}</h3>
            <p className="text-gray-300 text-sm">{t('contact.areas.cloud.desc')}</p>
          </div>
          <div>
            <h3 className="text-cyan-400 font-semibold mb-2">{t('contact.areas.japan.title')}</h3>
            <p className="text-gray-300 text-sm">{t('contact.areas.japan.desc')}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-400 italic">{t('contact.quote')}</p>
      </div>
    </div>
  </section>);
};

export default Contact;