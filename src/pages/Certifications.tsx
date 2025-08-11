import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface Certification {
  name: string;
  logo: string; // original remote (kept if we later want it)
  fallbackIcon?: string;
  url?: string; // public verification link
}

// Toggle: set to false if you want to attempt loading remote brand SVGs again
const FORCE_LOCAL_ICONS = true;

// Create reliable SVG icons for major companies
const createSVGIcon = (text: string, bgColor: string = '#22d3ee') => 
  `data:image/svg+xml;base64,${btoa(`
    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" fill="${bgColor}" rx="14"/>
      <text x="32" y="40" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="white" text-anchor="middle">${text}</text>
    </svg>
  `)}`;

// Updated certifications list with very reliable image URLs and fallbacks
// Final mapping with provided verification URLs (names kept close to original for i18n consistency)
const certifications: Certification[] = [
  { 
    name: 'Artificial Intelligence Fundamentals (IBM)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
  fallbackIcon: createSVGIcon('IBM', '#1f77b4'),
  url: 'https://www.credly.com/badges/fa3bf869-e936-4001-995e-ab8bcb774389/public_url'
  },
  { 
    name: 'Getting Started with DevOps on AWS', 
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
  fallbackIcon: createSVGIcon('AWS', '#ff9900')
  },
  { 
    name: 'Hadoop Programming - Level 1 (IBM)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
  fallbackIcon: createSVGIcon('IBM', '#1f77b4'),
  url: 'https://www.credly.com/badges/d6c8c0b4-6f95-44a7-b77b-b6d63faca225/public_url'
  },
  { 
    name: 'AWS - Solutions Architecture (Job Simulation)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
  fallbackIcon: createSVGIcon('AWS', '#ff9900'),
  url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_J986TYQH4BZJcsc93_1752201895584_completion_certificate.pdf'
  },
  { 
    name: 'AWS Managed Services: Disaster Recovery', 
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
  fallbackIcon: createSVGIcon('AWS', '#ff9900'),
  url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_J986TYQH4BZJcsc93_1753116581004_completion_certificate.pdf'
  },
  { 
    name: 'Accenture Nordics - Consultant (Job Simulation)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/accenture.svg',
  fallbackIcon: createSVGIcon('ACC', '#a100ff'),
  url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/KJGjQRHZ6eGquTKfF_xhih9yFWsf6AYfngd_J986TYQH4BZJcsc93_1752138276785_completion_certificate.pdf'
  },
  { 
    name: 'Accenture Nordics - Software Engineering (Job Simulation)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/accenture.svg',
  fallbackIcon: createSVGIcon('ACC', '#a100ff'),
  url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_J986TYQH4BZJcsc93_1753116581004_completion_certificate.pdf'
  },
  { 
    name: 'Build Your Own Chatbot (IBM)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
  fallbackIcon: createSVGIcon('IBM', '#1f77b4'),
  url: 'https://courses.cognitiveclass.ai/certificates/1dfa2dc3923a4741aa3aeba15c6e03cc'
  },
  { 
    name: 'Data Science Foundations - Level 1 (IBM)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
  fallbackIcon: createSVGIcon('IBM', '#1f77b4'),
  url: 'https://www.credly.com/badges/11fef2d1-51dc-4aa4-9371-ca9ce5217015'
  },
  { 
    name: 'Deloitte Australia - Cyber Security (Job Simulation)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/deloitte-1.svg',
  fallbackIcon: createSVGIcon('DEL', '#86bc25'),
  url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_J986TYQH4BZJcsc93_1752637119653_completion_certificate.pdf'
  },
  { 
    name: 'Docker Essentials: A Developer Introduction', 
    logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
  fallbackIcon: createSVGIcon('DOC', '#2496ed'),
  url: 'https://courses.cognitiveclass.ai/certificates/548cd53cd9354ea19e7babf25ab68fb5'
  },
  { 
    name: 'Tata - Cybersecurity Analyst (Job Simulation)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/tata-2.svg',
  fallbackIcon: createSVGIcon('TATA', '#1f4e79'),
  url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_J986TYQH4BZJcsc93_1752125819529_completion_certificate.pdf'
  },
  { 
    name: 'Tata - GenAI Powered Data Analytics (Job Simulation)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/tata-2.svg',
  fallbackIcon: createSVGIcon('TATA', '#1f4e79'),
  url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_J986TYQH4BZJcsc93_1752199339037_completion_certificate.pdf'
  },
  { 
    name: 'Programming with Generative AI (IIT Guwahati)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/iit-guwahati.svg',
  fallbackIcon: createSVGIcon('IIT', '#004d8f'),
  url: 'https://www.coursera.org/account/accomplishments/records/45MKMD1XJ9N3'
  },
  { 
    name: 'SQL (Mimo)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/mysql-logo.svg',
    fallbackIcon: createSVGIcon('SQL', '#4479a1')
  },
  { 
    name: 'Typing Certificate (Ratatype)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/ratatype.svg',
  fallbackIcon: createSVGIcon('TYPE', '#ff6b6b'),
  url: 'https://www.ratatype.com/u6730989/certificate/en_new/'
  },
];

const Certifications: React.FC = () => {
  const { t } = useTranslation();
  return (
  <section className="relative cyber-grid min-h-screen py-20 overflow-hidden">
    <Helmet>
      <title>{t('certifications.meta.title')}</title>
      <meta name="description" content={t('certifications.meta.description')} />
    </Helmet>
    
    {/* Futuristic Header */}
    <div className="relative z-10 text-center mb-16">
      <h1 className="text-5xl lg:text-7xl font-bold mb-6">
        {t('certifications.title')}
      </h1>
      <p className="text-xl text-cyan-300 max-w-2xl mx-auto px-6">
        {t('certifications.subtitle')}
      </p>
    </div>

    {/* Certification Cards */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {certifications.map((cert, idx) => (
        <CertCard key={cert.name} cert={cert} index={idx} />
      ))}
    </div>
  </section>
)};

export default Certifications;

// Animated certification card component
const CertCard: React.FC<{ cert: Certification; index: number }> = ({ cert, index }) => {
  const nodeRef = useRef<HTMLDivElement | HTMLAnchorElement | null>(null);
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    node.classList.add('opacity-0','translate-y-6','scale-95');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          node.classList.remove('opacity-0','translate-y-6','scale-95');
          node.classList.add('opacity-100','translate-y-0','scale-100');
          observer.disconnect();
        }
      });
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const initialSrc = FORCE_LOCAL_ICONS && cert.fallbackIcon ? cert.fallbackIcon : cert.logo;
  const inner = (
    <div className="glass p-6 rounded-2xl group hover:scale-105 hover:neon-glow transition-all duration-500 flex flex-col items-center text-center h-full focus:outline-none">
      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-800/60 rounded-xl p-2 border border-cyan-400/20 relative">
        {cert.url && (
          <span className="absolute -top-1 -right-1 bg-cyan-500/80 text-[10px] font-semibold px-1.5 py-0.5 rounded shadow" aria-hidden="true">🔗</span>
        )}
        <img
          src={initialSrc}
          alt={`${cert.name} logo`}
          className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement & { dataset: { fallbackUsed?: string } };
            if (!target.dataset.fallbackUsed && cert.fallbackIcon) {
              target.dataset.fallbackUsed = 'true';
              target.src = cert.fallbackIcon;
            }
          }}
        />
      </div>
      <span className="text-xs font-medium text-gray-300 leading-tight line-clamp-4">{cert.name}</span>
    </div>
  );
  const baseClasses = `transition-all duration-700 will-change-transform delay-[${index * 70}ms]`; 
  return cert.url ? (
    <a
      ref={nodeRef as React.RefObject<HTMLAnchorElement>}
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${cert.name} – Open credential in new tab`}
      className={`focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-2xl ${baseClasses}`}
    >
      {inner}
    </a>
  ) : (
    <div ref={nodeRef as React.RefObject<HTMLDivElement>} className={baseClasses}>{inner}</div>
  );
};
