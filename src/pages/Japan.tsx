import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation, Trans } from 'react-i18next';

// Futuristic Japan Vision page restored
const Japan: React.FC = () => {
  const { t } = useTranslation();
  const cards = t('japan.sections.future.cards', { returnObjects: true }) as { icon: string; title: string; desc: string }[];
  return (
  <section className="cyber-grid min-h-screen flex flex-col items-center justify-center py-16 text-gray-100 overflow-hidden">
    <Helmet>
      <title>{t('japan.meta.title')}</title>
      <meta name="description" content={t('japan.meta.description')} />
    </Helmet>

    {/* Flag Glow */}
    <div className="relative mb-10">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-full blur-2xl opacity-60" />
      <img
        src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f1ef-1f1f5.png"
        alt="Japan Flag"
        className="w-36 h-36 relative z-10 rounded-full border-4 border-red-400 shadow-[0_0_25px_-2px_rgba(255,80,80,0.8)]"
      />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent tracking-wide">{t('japan.title')}</h1>

      <div className="space-y-10">
        {/* Cultural Inspiration */}
        <div className="glass p-8 rounded-2xl neon-border hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-red-300 flex items-center justify-center gap-2">{t('japan.sections.cultural.title')}</h2>
          <p className="text-gray-300 leading-relaxed"><Trans i18nKey="japan.sections.cultural.text" components={{ strong: <strong className="text-cyan-400" /> }} /></p>
        </div>

        {/* Professional Values */}
        <div className="glass p-8 rounded-2xl neon-border hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-red-300 flex items-center justify-center gap-2">{t('japan.sections.professional.title')}</h2>
          <p className="text-gray-300 leading-relaxed"><Trans i18nKey="japan.sections.professional.text" components={{ strong: <strong className="text-cyan-400" /> }} /></p>
        </div>

        {/* Career Vision */}
        <div className="glass p-8 rounded-2xl neon-border hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-red-300 flex items-center justify-center gap-2">{t('japan.sections.career.title')}</h2>
          <p className="text-gray-300 leading-relaxed"><Trans i18nKey="japan.sections.career.text" components={{ strong: <strong className="text-cyan-400" /> }} /></p>
        </div>

        {/* Language Journey */}
        <div className="glass p-8 rounded-2xl neon-border hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-red-300 flex items-center justify-center gap-2">{t('japan.sections.language.title')}</h2>
          <div className="flex items-center justify-center gap-6 mb-4 text-3xl">
            <span>🇯🇵</span>
            <span className="text-cyan-400 text-xl font-semibold">{t('japan.sections.language.streak')}</span>
            <span>🦉</span>
          </div>
          <p className="text-gray-300 leading-relaxed">{t('japan.sections.language.text')}</p>
        </div>

        {/* Future Goals */}
        <div className="glass p-10 rounded-2xl neon-border hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-8 text-red-300 flex items-center justify-center gap-2">{t('japan.sections.future.title')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map(card => (
              <div key={card.title} className="p-5 bg-gradient-to-b from-purple-900/30 to-transparent rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
                <div className="text-3xl mb-2">{card.icon}</div>
                <h3 className="text-cyan-400 font-semibold mb-1">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-12 text-gray-400 italic tracking-wide">{t('japan.quote')}</p>
    </div>
  </section>);
};

export default Japan;