// src/components/Footer.tsx

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo text-white relative mt-24 pt-24 overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-32 -translate-y-full pointer-events-none"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path fill="#1F2D5C" fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,320L0,320Z"></path>
      </svg>
      <div className="container mx-auto px-4 py-10 text-center relative z-10">
        <p className="mb-4 font-jp-serif text-gold tracking-wide">Connect with me</p>
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://www.linkedin.com/in/harshit-gupta-ai-developer" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition" aria-label="LinkedIn profile">
            <FaLinkedin className="w-7 h-7 text-white/80 hover:text-white" />
          </a>
          <a href="https://github.com/HG-programer" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition" aria-label="GitHub profile">
            <FaGithub className="w-7 h-7 text-white/80 hover:text-white" />
          </a>
        </div>
        <p className="text-xs text-white/60">© {new Date().getFullYear()} Harshit Gupta</p>
      </div>
    </footer>
  );
};

export default Footer;