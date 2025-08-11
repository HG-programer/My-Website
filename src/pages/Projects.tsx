import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface Project {
  key: string;
  image: string;
  tech: string[];
}

const projects: Project[] = [
  { key: 'haru', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80', tech: ['Python','Flask','JavaScript','HTML/CSS','AI/ML','Ollama','Groq','Gemini'] },
  { key: 'insight', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=400&q=80', tech: ['Python','Flask','HuggingFace','PyTorch','HTML/CSS','JavaScript','AI/ML'] },
  { key: 'tasknova', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=400&q=80', tech: ['Flutter','Dart','AI/ML','Mobile','Android','Google API'] }
];

const Projects: React.FC = () => {
  const { t } = useTranslation();
  return (
  <section className="relative cyber-grid min-h-screen py-20 overflow-hidden">
    <Helmet>
      <title>{t('projects.meta.title')}</title>
      <meta name="description" content={t('projects.meta.description')} />
    </Helmet>
    <div className="relative z-10 text-center mb-16">
      <h1 className="text-5xl lg:text-7xl font-bold mb-6">{t('projects.title')}</h1>
      <p className="text-xl text-cyan-300 max-w-2xl mx-auto px-6">{t('projects.subtitle')}</p>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {projects.map(p => {
        const base = `projects.items.${p.key}`;
        const statusKey = t(`${base}.status`) as string;
        const statusClass = statusKey === 'live' ? 'status-live' : statusKey === 'inProgress' ? 'status-progress' : 'status-complete';
        const statusLabel = t(`projects.status.${statusKey}`);
        return (
          <div key={p.key} className="glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:neon-glow">
            <div className="relative">
              <img src={p.image} alt={t(`${base}.title`)} className="h-48 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${statusClass}`}>{statusLabel}</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t(`${base}.title`)}</h2>
              <p className="text-sm text-cyan-300 mb-3 font-mono">{t(`${base}.period`)}</p>
              <p className="mb-6 text-gray-300 text-sm leading-relaxed">{t(`${base}.desc`)}</p>
              <div className="mb-6">
                <h4 className="text-xs font-bold text-cyan-400 mb-3 uppercase tracking-wider">{t('projects.techStack')}</h4>
                <div className="flex flex-wrap gap-2">{p.tech.map(tech => <span key={tech} className="tag-tech">{tech}</span>)}</div>
              </div>
              <div className="flex gap-3">
                { /* Demo button only if a demo link provided via future i18n keys */ }
                <a href={`https://github.com/HG-programer`} target="_blank" rel="noopener noreferrer" className="btn-outline-cyber text-sm px-4 py-2 flex-1 text-center">{t('projects.buttons.github')}</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>);
};

export default Projects;