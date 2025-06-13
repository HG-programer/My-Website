// src/components/Footer.tsx

import React from 'react';
// 1. Import the specific icons you need from the 'react-icons/fa' library
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700 text-white relative mt-16 pt-16">
      <svg
        className="absolute top-0 w-full"
        viewBox="0 0 1440 320"
        style={{ transform: 'translateY(-100%)' }}
      >
        <path fill="#1d4ed8" fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="mb-4">Connect with me</p>
        <div className="flex justify-center space-x-6 mb-8">
          {/* 2. Use the icons as React components. Style them with className. */}
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-8 h-8 transition hover:opacity-75" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-8 h-8 transition hover:opacity-75" />
          </a>
        </div>
        
        <p className="text-sm text-blue-200">
          © {new Date().getFullYear()} Harshit Gupta
        </p>
      </div>
    </footer>
  );
};

export default Footer;