import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const metrics = [
    { value: '42+', label: t('home.impactMetrics.certifications.label'), desc: t('home.impactMetrics.certifications.desc') },
    { value: '15+', label: t('home.impactMetrics.projects.label'), desc: t('home.impactMetrics.projects.desc') },
    { value: t('home.impactMetrics.aiFocus.value'), label: t('home.impactMetrics.aiFocus.label'), desc: t('home.impactMetrics.aiFocus.desc') },
    { value: t('home.impactMetrics.jpLearning.value'), label: t('home.impactMetrics.jpLearning.label'), desc: t('home.impactMetrics.jpLearning.desc') }
  ];
  const building = t('home.currentlyBuilding.items', { returnObjects: true }) as string[];
  const growth = t('home.learningGrowth.items', { returnObjects: true }) as string[];
  const techStack = ['React','Django','Python','Java','Generative AI','Machine Learning','Robotics','Cloud Infrastructure','AWS','Docker','Git','TailwindCSS','REST APIs','SQL'];
  return (
  <section className="relative cyber-grid jp-hero min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
    <Helmet>
      <title>Harshit Gupta | Software Engineer</title>
      <meta name="description" content="Software Engineer & AI Developer building the future with cutting-edge technology" />
      <meta property="og:title" content="Harshit Gupta | Software Engineer" />
      <meta property="og:description" content="Software Engineer & AI Developer with vision for Japan's tech future" />
    </Helmet>

    {/* Japanese-inspired atmospheric layers */}
    <div className="sunrise-orb" aria-hidden />
    <div className="asanoha-layer" aria-hidden />
    <div className="jp-rising-lines" aria-hidden />
    
    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 px-6 max-w-7xl mx-auto">
      <div className="glass p-8 rounded-2xl relative overflow-hidden">
        <div className="relative w-64 h-64 lg:w-80 lg:h-80">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Harshit Gupta profile"
            className="w-full h-full rounded-2xl object-cover border-4 border-cyan-400 shadow-2xl neon-glow hover:scale-105 transition-transform duration-500 relative z-10 absolute inset-0" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div className="w-full h-full rounded-2xl border-4 border-cyan-400 shadow-2xl neon-glow bg-gradient-to-br from-cyan-400 to-purple-500 hidden items-center justify-center absolute inset-0 z-10">
            <span className="text-white font-bold text-6xl">HG</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl animate-pulse pointer-events-none" />
      </div>
      
      <div className="flex flex-col items-center lg:items-start max-w-2xl glass p-8 rounded-2xl">
        <h1 className="text-5xl lg:text-7xl font-bold mb-4">
          {t('hero.title')}
        </h1>
        <div className="jp-badge mb-6">
          <span className="text-sm font-semibold text-rose-100">{t('hero.jpBadge')}</span>
        </div>
        <div className="text-xl lg:text-2xl mb-8 text-cyan-300 font-light">
          <span className="block mb-2">🚀 {t('hero.tagline1')}</span>
          <span className="block mb-2">🤖 {t('hero.tagline2')}</span>
          <span className="block">🇯🇵 {t('hero.tagline3')}</span>
        </div>
        <p className="text-lg mb-8 text-gray-300 leading-relaxed text-center lg:text-left">
          {t('hero.intro')}
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link to="/projects" className="btn-cyber">
            ⚡ {t('hero.viewProjects')}
          </Link>
          <Link to="/about" className="btn-outline-cyber">
            🌟 {t('hero.aboutMe')}
          </Link>
        </div>
      </div>
    </div>

    {/* Extended details section */}
    <div className="relative z-10 w-full mt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Impact Metrics */}
        <div>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">{t('home.impactMetrics.title')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map(m => (
              <div key={m.label} className="glass rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300 neon-border">
                <div className="text-4xl font-extrabold text-cyan-300 tracking-wide">{m.value}</div>
                <div className="mt-2 text-gray-200 font-semibold uppercase text-sm tracking-wider">{m.label}</div>
                <div className="mt-1 text-xs text-gray-400">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Tech Stack */}
        <div className="glass p-8 rounded-2xl neon-border">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t('home.coreTechStack.title')}</h2>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {techStack.map(tk => <span key={tk} className="tag-tech hover:scale-110 transition-transform duration-300">{tk}</span>)}
          </div>
        </div>
        {/* Current Focus */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-2xl neon-border">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">{t('home.currentlyBuilding.title')}</h3>
            <ul className="space-y-3 text-left text-gray-300 list-disc list-inside">
              {building.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="glass p-8 rounded-2xl neon-border">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">{t('home.learningGrowth.title')}</h3>
            <ul className="space-y-3 text-left text-gray-300 list-disc list-inside">
              {growth.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-300 mb-6 text-lg">{t('home.cta.text')}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="btn-cyber">🤝 {t('home.cta.collaborate')}</Link>
            <Link to="/certifications" className="btn-outline-cyber">📜 {t('home.cta.certifications')}</Link>
          </div>
        </div>
      </div>
    </div>
  </section>);
};

export default Home;
