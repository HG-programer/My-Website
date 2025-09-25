import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface Certification {
  name: string;
  issuer: string;
  issued: string;
  logo: string; // original remote (kept if we later want it)
  fallbackIcon?: string;
  credentialId?: string;
  skills?: string[];
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

// Updated certifications list with reliable icons, metadata, and optional credential links
const certifications: Certification[] = [
  {
    name: 'Accelerated Deep Learning with GPU',
    issuer: 'IBM',
    issued: 'Sep 2025',
    credentialId: 'e0f4c759-6073-4503-bd65-61c65a5f1385',
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
    fallbackIcon: createSVGIcon('IBM', '#1f77b4'),
    url: 'https://www.credly.com/badges/e0f4c759-6073-4503-bd65-61c65a5f1385/public_url',
    skills: ['Deep Learning', 'Deep Neural Networks (DNN)', 'Convolutional Neural Networks (CNN)'],
  },
  {
    name: 'Basics of Robotics',
    issuer: 'Siemens Digital Industries Software',
    issued: 'Sep 2025',
    credentialId: 'K8P9028T58CR',
    logo: 'https://cdn.worldvectorlogo.com/logos/siemens-1.svg',
    fallbackIcon: createSVGIcon('SIE', '#009999'),
    url: 'https://www.credly.com/badges/K8P9028T58CR/public_url',
    skills: ['Robotics', 'Robot Operating System (ROS)', 'Robot Programming', 'Robotic Process Automation (RPA)'],
  },
  {
    name: 'Deep Learning',
    issuer: 'IBM',
    issued: 'Sep 2025',
    credentialId: '949e63b1-4ad3-4660-8c96-78340a6e2e8d',
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
    fallbackIcon: createSVGIcon('IBM', '#1f77b4'),
    url: 'https://www.credly.com/badges/949e63b1-4ad3-4660-8c96-78340a6e2e8d/public_url',
    skills: [
      'Deep Learning',
      'Deep Neural Networks (DNN)',
      'Convolutional Neural Networks (CNN)',
      'Autoencoder',
      'Artificial Intelligence (AI)',
      'Natural Language Processing (NLP)',
      'Neural Networks',
      'RBM',
      'Recurrent Neural Networks (RNN)',
      'TensorFlow',
    ],
  },
  {
    name: 'AWS Command Line Interface (Basics)',
    issuer: 'Amazon Web Services (AWS)',
    issued: 'Aug 2025',
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
    fallbackIcon: createSVGIcon('AWS', '#ff9900'),
    url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/17690/aws-command-line-interface-basics',
    skills: ['CLI', 'Command Prompt', 'AWS Cloud Basics', 'AWS (Amazon Web Services)'],
  },
  {
    name: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    issued: 'Aug 2025',
    credentialId: 'fa3bf869-e936-4001-995e-ab8bcb774389',
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
    fallbackIcon: createSVGIcon('IBM', '#1f77b4'),
    url: 'https://www.credly.com/badges/fa3bf869-e936-4001-995e-ab8bcb774389/public_url',
    skills: ['Artificial Intelligence (AI)', 'Data Science', 'IBM Watson', 'Natural Language Processing (NLP)', 'Machine Learning Algorithms'],
  },
  {
    name: 'Deep Learning Essentials',
    issuer: 'IBM',
    issued: 'Aug 2025',
    credentialId: '9235ba9b-e2ff-449c-aedc-3bf9753ba74e',
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
    fallbackIcon: createSVGIcon('IBM', '#1f77b4'),
    url: 'https://www.credly.com/badges/9235ba9b-e2ff-449c-aedc-3bf9753ba74e/public_url',
    skills: ['Deep Learning', 'Neural Networks', 'Model Evaluation'],
  },
  {
    name: 'Deep Learning with TensorFlow (Advance)',
    issuer: 'IBM',
    issued: 'Aug 2025',
    credentialId: '14072037-6834-4397-af07-ba8916b0e727',
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
    fallbackIcon: createSVGIcon('IBM', '#1f77b4'),
    url: 'https://www.credly.com/badges/14072037-6834-4397-af07-ba8916b0e727/public_url',
    skills: ['Deep Learning', 'TensorFlow', 'RBM', 'Recurrent Neural Networks (RNN)', 'Autoencoder'],
  },
  {
    name: 'Getting Started with DevOps on AWS',
    issuer: 'Amazon Web Services (AWS)',
    issued: 'Aug 2025',
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
    fallbackIcon: createSVGIcon('AWS', '#ff9900'),
    url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/18162/getting-started-with-devops-on-aws',
    skills: ['DevOps', 'AWS (Amazon Web Services)', 'Cloud Computing', 'AWS Cloud Basics'],
  },
  {
    name: 'Hadoop Programming - Level 1',
    issuer: 'IBM',
    issued: 'Aug 2025',
    credentialId: 'yLuGB5K8D6ygO3bELcDFiw',
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
    fallbackIcon: createSVGIcon('IBM', '#1f77b4'),
    url: 'https://courses.cognitiveclass.ai/certificates/yLuGB5K8D6ygO3bELcDFiw',
    skills: ['Hadoop', 'MapReduce', 'Yarn'],
  },
  {
    name: 'AWS - Solutions Architecture (Job Simulation)',
    issuer: 'AWS x Forage',
    issued: 'Jul 2025',
    credentialId: 'zawjx2wcndBAwhiJ5',
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
    fallbackIcon: createSVGIcon('AWS', '#ff9900'),
    skills: ['Architecture Diagram', 'AWS Pricing', 'Technical Communication'],
  },
  {
    name: 'AWS Managed Services (AMS): Advanced - Disaster Recovery',
    issuer: 'Amazon Web Services (AWS)',
    issued: 'Jul 2025',
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
    fallbackIcon: createSVGIcon('AWS', '#ff9900'),
    skills: ['AWS Cloud Basics', 'Disaster Recovery Concepts', 'Cloud Infrastructure', 'Amazon EC2', 'AWS Backup'],
  },
  {
    name: 'Accenture Nordics - Consultant (Job Simulation)',
    issuer: 'Accenture x Forage',
    issued: 'Jul 2025',
    credentialId: 'mQsDtKFFaWLy3zmR7',
    logo: 'https://cdn.worldvectorlogo.com/logos/accenture.svg',
    fallbackIcon: createSVGIcon('ACC', '#a100ff'),
    skills: ['Attention to Detail', 'Client Advisory'],
  },
  {
    name: 'Accenture Nordics - Software Engineering (Job Simulation)',
    issuer: 'Accenture x Forage',
    issued: 'Jul 2025',
    credentialId: '2H37F7Zrxr4phPJpp',
    logo: 'https://cdn.worldvectorlogo.com/logos/accenture.svg',
    fallbackIcon: createSVGIcon('ACC', '#a100ff'),
    skills: ['Agile Methodologies', 'Maturity Assessments', 'Debugging', 'Analysis', 'SSDLC'],
  },
  {
    name: 'Build Your Own Chatbot',
    issuer: 'IBM',
    issued: 'Jul 2025',
    credentialId: '1dfa2dc3923a4741aa3aeba15c6e03cc',
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
    fallbackIcon: createSVGIcon('IBM', '#1f77b4'),
    url: 'https://courses.cognitiveclass.ai/certificates/1dfa2dc3923a4741aa3aeba15c6e03cc',
    skills: ['AI Chatbot', 'IBM Watson', 'Conversational Design', 'Chatbot Development', 'NLP'],
  },
  {
    name: 'Data Science Foundations - Level 1',
    issuer: 'IBM',
    issued: 'Jul 2025',
    credentialId: '11fef2d1-51dc-4aa4-9371-ca9ce5217015',
    logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg',
    fallbackIcon: createSVGIcon('IBM', '#1f77b4'),
    url: 'https://www.credly.com/badges/11fef2d1-51dc-4aa4-9371-ca9ce5217015/public_url',
    skills: ['Data Analysis', 'Data Science', 'Machine Learning', 'Data Literacy'],
  },
  {
    name: 'Deloitte Australia - Cyber Security (Job Simulation)',
    issuer: 'Deloitte x Forage',
    issued: 'Jul 2025',
    credentialId: 'H6rP5MKtuNkYqWykL',
    logo: 'https://cdn.worldvectorlogo.com/logos/deloitte-1.svg',
    fallbackIcon: createSVGIcon('DEL', '#86bc25'),
    skills: ['Cybersecurity', 'Threat Analysis', 'Incident Response'],
  },
  {
    name: 'Docker Essentials: A Developer Introduction',
    issuer: 'IBM',
    issued: 'Jul 2025',
    credentialId: '548cd53cd9354ea19e7babf25ab68fb5',
    logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
    fallbackIcon: createSVGIcon('DOC', '#2496ed'),
    url: 'https://courses.cognitiveclass.ai/certificates/548cd53cd9354ea19e7babf25ab68fb5',
    skills: ['DevOps', 'CI/CD', 'Software Deployment', 'Containerization', 'Docker'],
  },
  {
    name: 'Tata - Cybersecurity Analyst (Job Simulation)',
    issuer: 'Tata x Forage',
    issued: 'Jul 2025',
    credentialId: '7ADSicLF5y5nKcZKs',
    logo: 'https://cdn.worldvectorlogo.com/logos/tata-2.svg',
    fallbackIcon: createSVGIcon('TATA', '#1f4e79'),
    skills: ['Cybersecurity', 'Risk Assessment', 'Security Strategy'],
  },
  {
    name: 'Tata - GenAI Powered Data Analytics (Job Simulation)',
    issuer: 'Tata x Forage',
    issued: 'Jul 2025',
    credentialId: '3zddqZxMYcW9d3S87',
    logo: 'https://cdn.worldvectorlogo.com/logos/tata-2.svg',
    fallbackIcon: createSVGIcon('TATA', '#1f4e79'),
    skills: ['Generative AI', 'Data Analytics', 'Business Insights'],
  },
  {
    name: 'Programming with Generative AI',
    issuer: 'Indian Institute of Technology, Guwahati',
    issued: 'May 2025',
    credentialId: '45MKMD1XJ9N3',
    logo: 'https://cdn.worldvectorlogo.com/logos/iit-guwahati.svg',
    fallbackIcon: createSVGIcon('IIT', '#004d8f'),
    url: 'https://www.coursera.org/account/accomplishments/verify/45MKMD1XJ9N3',
    skills: ['Generative AI', 'GitHub Copilot', 'VS Code', 'GitHub'],
  },
  {
    name: 'SQL',
    issuer: 'Mimo',
    issued: 'Aug 2024',
    logo: 'https://cdn.worldvectorlogo.com/logos/mysql-logo.svg',
    fallbackIcon: createSVGIcon('SQL', '#4479a1'),
    skills: ['SQL', 'Database Management System (DBMS)'],
  },
  {
    name: 'Typing Certificate',
    issuer: 'Ratatype',
    issued: 'Jan 2024',
    credentialId: '6730989',
    logo: 'https://cdn.worldvectorlogo.com/logos/ratatype.svg',
    fallbackIcon: createSVGIcon('TYPE', '#ff6b6b'),
    url: 'https://www.ratatype.com/u6730989/certificate/en/',
    skills: ['Typing'],
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
  const skillsToShow = cert.skills?.slice(0, 6);

  const inner = (
    <div className="glass p-6 rounded-2xl group hover:scale-105 hover:neon-glow transition-all duration-500 flex flex-col text-center h-full focus:outline-none">
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
      <div className="flex flex-col items-center gap-3">
        <div className="space-y-2">
          <span className="text-sm font-semibold text-gray-100 leading-snug block line-clamp-3">{cert.name}</span>
          <div className="text-xs text-cyan-200/90 leading-relaxed">
            <p className="font-medium">{cert.issuer}</p>
            <p className="uppercase tracking-wide text-[11px] text-cyan-100/70">{cert.issued}</p>
            {cert.credentialId && (
              <p className="text-[10px] text-gray-300/80 mt-1">
                Credential ID: <span className="font-mono">{cert.credentialId}</span>
              </p>
            )}
          </div>
        </div>
        {skillsToShow && skillsToShow.length > 0 && (
          <ul className="flex flex-wrap justify-center gap-1.5 max-w-[14rem]">
            {skillsToShow.map((skill) => (
              <li
                key={skill}
                className="text-[10px] md:text-[11px] px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-300/30 text-cyan-100 whitespace-nowrap"
              >
                {skill}
              </li>
            ))}
          </ul>
        )}
      </div>
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
