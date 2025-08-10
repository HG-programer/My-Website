import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Certification {
  name: string;
  logo: string;
}

// Updated certifications list with reliable image URLs
const certifications: Certification[] = [
  { name: 'Artificial Intelligence Fundamentals (IBM)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ibm/ibm-original.svg' },
  { name: 'Getting Started with DevOps on AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Hadoop Programming - Level 1 (IBM)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ibm/ibm-original.svg' },
  { name: 'AWS - Solutions Architecture (Job Simulation)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'AWS Managed Services: Disaster Recovery', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Accenture Nordics - Consultant (Job Simulation)', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Accenture-Logo.png' },
  { name: 'Accenture Nordics - Software Engineering (Job Simulation)', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Accenture-Logo.png' },
  { name: 'Build Your Own Chatbot (IBM)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ibm/ibm-original.svg' },
  { name: 'Data Science Foundations - Level 1 (IBM)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ibm/ibm-original.svg' },
  { name: 'Deloitte Australia - Cyber Security (Job Simulation)', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Deloitte-Logo.png' },
  { name: 'Docker Essentials: A Developer Introduction', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Tata - Cybersecurity Analyst (Job Simulation)', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Tata-Logo.png' },
  { name: 'Tata - GenAI Powered Data Analytics (Job Simulation)', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Tata-Logo.png' },
  { name: 'Programming with Generative AI (IIT Guwahati)', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Indian_Institute_of_Technology_Guwahati_Logo.svg/1200px-Indian_Institute_of_Technology_Guwahati_Logo.svg.png' },
  { name: 'SQL (Mimo)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Typing Certificate (Ratatype)', logo: 'https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48v8jtw3qe' },
];

const Certifications: React.FC = () => (
  <section className="relative cyber-grid min-h-screen py-20 overflow-hidden">
    <Helmet>
      <title>Certifications | Harshit Gupta</title>
      <meta name="description" content="Professional certifications earned by Harshit Gupta." />
    </Helmet>
    
    {/* Futuristic Header */}
    <div className="relative z-10 text-center mb-16">
      <h1 className="text-5xl lg:text-7xl font-bold mb-6">
        CERTIFICATIONS
      </h1>
      <p className="text-xl text-cyan-300 max-w-2xl mx-auto px-6">
        Industry-recognized credentials showcasing expertise across AI, Cloud, and Development
      </p>
    </div>

    {/* Certification Cards */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {certifications.map(cert => (
        <div
          key={cert.name}
          className="glass p-6 rounded-2xl hover:scale-105 hover:neon-glow transition-all duration-500 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-800/50 rounded-xl p-2">
            <img 
              src={cert.logo} 
              alt={`${cert.name} logo`} 
              className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/64x64/22d3ee/ffffff?text=' + cert.name.charAt(0);
              }}
            />
          </div>
          <span className="text-xs font-medium text-gray-300 leading-tight">
            {cert.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Certifications;
