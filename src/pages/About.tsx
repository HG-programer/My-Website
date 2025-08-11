import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation, Trans } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  const qualities = t('about.qualities.items', { returnObjects: true }) as string[];
  return (
  <section className="cyber-grid min-h-screen py-20 text-gray-100 overflow-hidden">
    <Helmet>
      <title>{t('about.meta.title')}</title>
      <meta name="description" content={t('about.meta.description')} />
    </Helmet>
    <div className="relative z-10 max-w-5xl mx-auto px-6">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
          {t('about.title')}
        </h1>
        <div className="glass p-8 rounded-2xl">
          <p className="text-gray-300 text-lg leading-relaxed">
            {t('about.intro')}
          </p>
        </div>
      </header>
      <article className="space-y-8">
        <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 neon-border">
          <p className="text-gray-300 leading-relaxed"><Trans i18nKey="about.education" components={{ strong: <strong className="text-cyan-400" /> }} /></p>
        </div>
        <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 neon-border">
          <p className="text-gray-300 leading-relaxed"><Trans i18nKey="about.simulations" components={{ strong: <strong className="text-cyan-400" /> }} /></p>
        </div>
        <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 neon-border">
          <p className="text-gray-300 leading-relaxed"><Trans i18nKey="about.genAI" components={{ strong: <strong className="text-cyan-400" /> }} /></p>
        </div>
        <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 neon-border">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t('about.techStack.title')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-cyan-400 font-semibold mb-2">{t('about.techStack.languages')}</h3>
              <p className="text-gray-300">{t('about.techStack.languagesList')}</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold mb-2">{t('about.techStack.frameworks')}</h3>
              <p className="text-gray-300">{t('about.techStack.frameworksList')}</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold mb-2">{t('about.techStack.domains')}</h3>
              <p className="text-gray-300">{t('about.techStack.domainsList')}</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold mb-2">{t('about.techStack.tools')}</h3>
              <p className="text-gray-300">{t('about.techStack.toolsList')}</p>
            </div>
          </div>
        </div>
        <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 neon-border">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t('about.interdisciplinary.title')}</h2>
          <p className="text-gray-300 leading-relaxed"><Trans i18nKey="about.interdisciplinary.text" components={{ strong: <strong className="text-cyan-400" /> }} /></p>
        </div>
        <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 neon-border">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t('about.cultural.title')}</h2>
          <p className="text-gray-300 leading-relaxed"><Trans i18nKey="about.cultural.text" components={{ strong: <strong className="text-cyan-400" /> }} /></p>
        </div>
        <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 neon-border">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t('about.qualities.title')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {qualities.map(q => (
              <div key={q} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full neon-glow"></div>
                <span className="text-gray-300">{q}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 neon-border text-center">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t('about.mission.title')}</h2>
          <p className="text-gray-300 leading-relaxed">{t('about.mission.text')}</p>
        </div>
      </article>
    </div>
  </section>
  );
};

export default About;