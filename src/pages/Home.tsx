import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  // Animated metrics data (value can be numeric-like string with + or % suffix)
  const metrics = [
    { value: '16+', label: t('home.impactMetrics.certifications.label'), desc: t('home.impactMetrics.certifications.desc') },
    { value: '12+', label: t('home.impactMetrics.projects.label'), desc: t('home.impactMetrics.projects.desc') },
    { value: t('home.impactMetrics.aiFocus.value'), label: t('home.impactMetrics.aiFocus.label'), desc: t('home.impactMetrics.aiFocus.desc') },
    { value: t('home.impactMetrics.jpLearning.value'), label: t('home.impactMetrics.jpLearning.label'), desc: t('home.impactMetrics.jpLearning.desc') }
  ];
  const building = t('home.currentlyBuilding.items', { returnObjects: true }) as string[];
  const growth = t('home.learningGrowth.items', { returnObjects: true }) as string[];
  const techStack = ['TypeScript','React','Django','Spring Boot','Python','Java','AWS','Docker','Git','TailwindCSS','REST APIs','SQL'];
  
  return (
    <section className="relative cyber-grid min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 px-6 max-w-7xl mx-auto">
        <div className="glass p-8 rounded-2xl relative">
          <img
            src="/profile.jpg"
            alt="Harshit Gupta profile"
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-cover border-4 border-cyan-400 shadow-2xl neon-glow hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl animate-pulse" />
        </div>
        
        <div className="flex flex-col items-center lg:items-start max-w-2xl glass p-8 rounded-2xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
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
              {metrics.map((m, idx) => (
                <MetricCard key={m.label} index={idx} value={m.value} label={m.label} desc={m.desc} />
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
    </section>
  );
};

export default Home;

// MetricCard component with scroll-based reveal & count-up animation
interface MetricCardProps {
  value: string; // original display value e.g., '16+' or '80%'
  label: string;
  desc: string;
  index: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label, desc, index }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState<string>(() => (value.match(/^[0-9]+/) ? '0' : value));

  // Extract numeric portion and suffix
  const match = value.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || targetNumber === null) return;
    const duration = 1200; // ms
    const start = performance.now();
    const animate = (time: number) => {
      const progress = Math.min(1, (time - start) / duration);
      const current = Math.floor(progress * targetNumber);
      setDisplayValue(current.toString());
      if (progress < 1) requestAnimationFrame(animate); else setDisplayValue(targetNumber.toString());
    };
    requestAnimationFrame(animate);
  }, [visible, targetNumber]);

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-6 flex flex-col items-center transition-all duration-700 neon-border will-change-transform
        ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'} delay-[${index * 75}ms]`}
    >
      <div className="text-4xl font-extrabold text-cyan-300 tracking-wide">
        {targetNumber !== null ? `${displayValue}${suffix}` : value}
      </div>
      <div className="mt-2 text-gray-200 font-semibold uppercase text-sm tracking-wider text-center">{label}</div>
      <div className="mt-1 text-xs text-gray-400 text-center">{desc}</div>
    </div>
  );
};
