import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface Certification {
  name: string;
  logo: string; // original remote (kept if we later want it)
  fallbackIcon?: string;
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
const certifications: Certification[] = [
  { 
    name: 'Artificial Intelligence Fundamentals (IBM)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
    fallbackIcon: createSVGIcon('IBM', '#1f77b4')
  },
  { 
    name: 'Getting Started with DevOps on AWS', 
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
    fallbackIcon: createSVGIcon('AWS', '#ff9900')
  },
  { 
    name: 'Hadoop Programming - Level 1 (IBM)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
    fallbackIcon: createSVGIcon('IBM', '#1f77b4')
  },
  { 
    name: 'AWS - Solutions Architecture (Job Simulation)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
    fallbackIcon: createSVGIcon('AWS', '#ff9900')
  },
  { 
    name: 'AWS Managed Services: Disaster Recovery', 
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
    fallbackIcon: createSVGIcon('AWS', '#ff9900')
  },
  { 
    name: 'Accenture Nordics - Consultant (Job Simulation)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/accenture.svg',
    fallbackIcon: createSVGIcon('ACC', '#a100ff')
  },
  { 
    name: 'Accenture Nordics - Software Engineering (Job Simulation)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/accenture.svg',
    fallbackIcon: createSVGIcon('ACC', '#a100ff')
  },
  { 
    name: 'Build Your Own Chatbot (IBM)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
    fallbackIcon: createSVGIcon('IBM', '#1f77b4')
  },
  { 
    name: 'Data Science Foundations - Level 1 (IBM)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
    fallbackIcon: createSVGIcon('IBM', '#1f77b4')
  },
  { 
    name: 'Deloitte Australia - Cyber Security (Job Simulation)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/deloitte-1.svg',
    fallbackIcon: createSVGIcon('DEL', '#86bc25')
  },
  { 
    name: 'Docker Essentials: A Developer Introduction', 
    logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
    fallbackIcon: createSVGIcon('DOC', '#2496ed')
  },
  { 
    name: 'Tata - Cybersecurity Analyst (Job Simulation)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/tata-2.svg',
    fallbackIcon: createSVGIcon('TATA', '#1f4e79')
  },
  { 
    name: 'Tata - GenAI Powered Data Analytics (Job Simulation)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/tata-2.svg',
    fallbackIcon: createSVGIcon('TATA', '#1f4e79')
  },
  { 
    name: 'Programming with Generative AI (IIT Guwahati)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/iit-guwahati.svg',
    fallbackIcon: createSVGIcon('IIT', '#004d8f')
  },
  { 
    name: 'SQL (Mimo)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/mysql-logo.svg',
    fallbackIcon: createSVGIcon('SQL', '#4479a1')
  },
  { 
    name: 'Typing Certificate (Ratatype)', 
    logo: 'https://cdn.worldvectorlogo.com/logos/ratatype.svg',
    fallbackIcon: createSVGIcon('TYPE', '#ff6b6b')
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
      {certifications.map(cert => {
        const initialSrc = FORCE_LOCAL_ICONS && cert.fallbackIcon ? cert.fallbackIcon : cert.logo;
        return (
          <div
            key={cert.name}
            className="glass p-6 rounded-2xl hover:scale-105 hover:neon-glow transition-all duration-500 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-800/60 rounded-xl p-2 border border-cyan-400/20">
              <img
                src={initialSrc}
                alt={`${cert.name} logo`}
                className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallbackUsed && cert.fallbackIcon) {
                    target.dataset.fallbackUsed = 'true';
                    target.src = cert.fallbackIcon;
                  }
                }}
              />
            </div>
            <span className="text-xs font-medium text-gray-300 leading-tight">
              {cert.name}
            </span>
          </div>
        );
      })}
    </div>
  </section>
)};

export default Certifications;
