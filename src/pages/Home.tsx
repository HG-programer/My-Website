import React from 'react';
import { Link } from 'react-router-dom';
import heroIllustration from '../assets/images/hero-illustration.svg';

const Home: React.FC = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[60vh] text-center bg-gradient-to-br from-blue-50 via-white to-pink-50 overflow-hidden">
    {/* Decorative SVG */}
    <svg className="absolute top-0 left-0 w-full h-48 opacity-20 pointer-events-none" viewBox="0 0 1440 320">
      <path fill="#60a5fa" fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>
    {/* Responsive local illustration */}
    <img
      src={heroIllustration}
      alt="Developer working on a project"
      className="max-w-xs md:max-w-md w-full h-auto mx-auto mb-6 relative z-10"
    />
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-700 relative z-10">Harshit Gupta</h1>
    <p className="text-xl md:text-2xl mb-6 text-gray-700 relative z-10">
      Aspiring Full Stack Developer with a Heart for Healing and a Vision for Japan.
    </p>
    <Link
      to="/projects"
      className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition relative z-10"
    >
      View Projects
    </Link>
  </section>
);

export default Home;