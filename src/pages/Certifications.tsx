import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface Certification {
  name: string;
  logo?: string; // optional remote
  fallbackIcon?: string;
  provider?: string;
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

const providerFallback = (abbr: string, color: string) => createSVGIcon(abbr, color);

const categories: { title: string; items: Certification[] }[] = [
  {
    title: 'Core IT, OS and Support',
    items: [
      { name: 'Technical Support Fundamentals – Google', provider: 'Google', fallbackIcon: providerFallback('GOOG', '#34a853') },
      { name: 'Computer Hardware Basics – Cisco Networking Academy', provider: 'Cisco', fallbackIcon: providerFallback('CSCO', '#0b5fff') },
      { name: 'Operating Systems Basics – Cisco Networking Academy', provider: 'Cisco', fallbackIcon: providerFallback('CSCO', '#0b5fff') },
      { name: 'Typing Certificate – Ratatype', provider: 'Ratatype', fallbackIcon: providerFallback('TYPE', '#ff6b6b') },
    ],
  },
  {
    title: 'Cloud, DevOps and AWS',
    items: [
      { name: 'AWS Cloud Quest: Cloud Practitioner – AWS Skill Builder', provider: 'AWS', fallbackIcon: providerFallback('AWS', '#ff9900') },
      { name: 'AWS Command Line Interface (Basics) – Amazon Web Services', provider: 'AWS', fallbackIcon: providerFallback('AWS', '#ff9900') },
      { name: 'Getting Started with DevOps on AWS – Amazon Web Services', provider: 'AWS', fallbackIcon: providerFallback('AWS', '#ff9900') },
      { name: 'AWS Managed Services (AMS): Advanced – Disaster Recovery – Amazon Web Services', provider: 'AWS', fallbackIcon: providerFallback('AWS', '#ff9900') },
      { name: 'AWS Solutions Architecture – Job Simulation – Forage', provider: 'AWS', fallbackIcon: providerFallback('AWS', '#ff9900') },
      { name: 'Advanced Testing Practices Using AWS DevOps Tools – AWS Training & Certification', provider: 'AWS', fallbackIcon: providerFallback('AWS', '#ff9900') },
      { name: 'Getting Started with AWS Cloud Essentials – AWS Training & Certification', provider: 'AWS', fallbackIcon: providerFallback('AWS', '#ff9900') },
      { name: 'AWS Knowledge: Cloud Essentials – Training Badge (digital badge)', provider: 'AWS', fallbackIcon: providerFallback('AWS', '#ff9900') },
      { name: 'Managing, Monitoring, and Optimizing your Amazon Elastic File System (Amazon EFS) Solution – AWS Training & Certification', provider: 'AWS', fallbackIcon: providerFallback('AWS', '#ff9900') },
      { name: 'End User Computing on AWS – Introductory Course', provider: 'AWS', fallbackIcon: providerFallback('AWS', '#ff9900') },
      { name: 'AWS VPN – Troubleshooting', provider: 'AWS', fallbackIcon: providerFallback('AWS', '#ff9900') },
    ],
  },
  {
    title: 'Software Engineering and Development',
    items: [
      { name: 'Introduction to Software Development – Amazon', provider: 'Amazon', fallbackIcon: providerFallback('AMZ', '#ff9900') },
      { name: 'Electronic Arts – Software Engineering Job Simulation – Forage', provider: 'EA', fallbackIcon: providerFallback('EA', '#ea1d2d') },
      { name: 'Accenture Nordics – Software Engineering Job Simulation – Forage', provider: 'Accenture', fallbackIcon: providerFallback('ACC', '#a100ff') },
      { name: 'Accenture Nordics – Consultant Job Simulation – Forage', provider: 'Accenture', fallbackIcon: providerFallback('ACC', '#a100ff') },
    ],
  },
  {
    title: 'Data, AI, and Generative AI',
    items: [
      { name: 'Foundations: Data, Data, Everywhere – Google', provider: 'Google', fallbackIcon: providerFallback('GOOG', '#34a853') },
      { name: 'Data Science Foundations – Level 1 – IBM', provider: 'IBM', fallbackIcon: providerFallback('IBM', '#1f77b4') },
      { name: 'Deep Learning – IBM', provider: 'IBM', fallbackIcon: providerFallback('IBM', '#1f77b4') },
      { name: 'Deep Learning Essentials – IBM', provider: 'IBM', fallbackIcon: providerFallback('IBM', '#1f77b4') },
      { name: 'Deep Learning with TensorFlow (Advanced) – IBM', provider: 'IBM', fallbackIcon: providerFallback('IBM', '#1f77b4') },
      { name: 'Accelerated Deep Learning with GPU – IBM', provider: 'IBM', fallbackIcon: providerFallback('IBM', '#1f77b4') },
      { name: 'Artificial Intelligence Fundamentals – IBM', provider: 'IBM', fallbackIcon: providerFallback('IBM', '#1f77b4') },
      { name: 'Build Your Own Chatbot – IBM', provider: 'IBM', fallbackIcon: providerFallback('IBM', '#1f77b4') },
      { name: 'Generative AI in Software Development – Amazon', provider: 'Amazon', fallbackIcon: providerFallback('AMZ', '#ff9900') },
      { name: 'Programming with Generative AI – IIT Guwahati', provider: 'IIT', fallbackIcon: providerFallback('IIT', '#004d8f') },
      { name: 'Tata – GenAI Powered Data Analytics – Job Simulation – Forage', provider: 'Tata', fallbackIcon: providerFallback('TATA', '#1f4e79') },
      { name: 'Data Science & Analytics – HP LIFE (HP Foundation)', provider: 'HP', fallbackIcon: providerFallback('HP', '#0096d6') },
    ],
  },
  {
    title: 'Cybersecurity, Containers, Big Data',
    items: [
      { name: 'Tata – Cybersecurity Analyst – Job Simulation – Forage', provider: 'Tata', fallbackIcon: providerFallback('TATA', '#1f4e79') },
      { name: 'Deloitte Australia – Cyber Security – Job Simulation – Forage', provider: 'Deloitte', fallbackIcon: providerFallback('DEL', '#86bc25') },
      { name: 'Docker Essentials: A Developer Introduction – IBM', provider: 'Docker', fallbackIcon: providerFallback('DOC', '#2496ed') },
      { name: 'Hadoop Programming – Level 1 – IBM', provider: 'IBM', fallbackIcon: providerFallback('IBM', '#1f77b4') },
    ],
  },
  {
    title: 'Robotics, Databases, Kubernetes',
    items: [
      { name: 'Basics of Robotics – Siemens Digital Industries Software', provider: 'Siemens', fallbackIcon: providerFallback('SIE', '#009999') },
      { name: 'SQL – Mimo', provider: 'Mimo', fallbackIcon: providerFallback('SQL', '#4479a1') },
      { name: 'Introduction to Kubernetes – Simplilearn', provider: 'K8s', fallbackIcon: providerFallback('K8S', '#326ce5') },
    ],
  },
  {
    title: 'Leadership and Mindset',
    items: [
      { name: 'Effective Leadership – HP LIFE (HP Foundation)', provider: 'HP', fallbackIcon: providerFallback('HP', '#0096d6') },
      { name: 'Success Mindset – HP LIFE (HP Foundation)', provider: 'HP', fallbackIcon: providerFallback('HP', '#0096d6') },
    ],
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
      <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-100 border border-cyan-400/40">
        <span className="text-lg">🇯🇵</span>
        <span className="font-medium">{t('certifications.streak')}</span>
      </div>
    </div>

    {/* Certification Cards grouped */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-10">
      {categories.map(category => (
        <div key={category.title} className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-10 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full" aria-hidden />
            <h2 className="text-2xl font-semibold text-gray-100">{category.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.items.map(cert => {
              const initialSrc = FORCE_LOCAL_ICONS && cert.fallbackIcon ? cert.fallbackIcon : (cert.logo || cert.fallbackIcon || createSVGIcon('CERT'));
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
                  <span className="text-xs font-medium text-gray-100 leading-tight">{cert.name}</span>
                  {cert.provider && (
                    <span className="text-[10px] text-cyan-400 mt-2 uppercase tracking-wide font-semibold">{cert.provider}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </section>
)};

export default Certifications;
