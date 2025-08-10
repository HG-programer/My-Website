import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => (
  <section className="relative cyber-grid min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
    {/* Floating particles background */}
    <div className="particles">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
    
    <Helmet>
      <title>Harshit Gupta | Futuristic Portfolio</title>
      <meta name="description" content="Full Stack & AI Developer building the future with cutting-edge technology" />
      <meta property="og:title" content="Harshit Gupta | Futuristic Portfolio" />
      <meta property="og:description" content="Full Stack & AI Developer with vision for Japan's tech future" />
    </Helmet>
    
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
        <h1 className="text-5xl lg:text-7xl font-bold mb-6">
          HARSHIT GUPTA
        </h1>
        <div className="text-xl lg:text-2xl mb-8 text-cyan-300 font-light">
          <span className="block mb-2">🚀 Full Stack & AI Developer</span>
          <span className="block mb-2">🤖 Generative AI Specialist</span>
          <span className="block">🇯🇵 Japan Tech Visionary</span>
        </div>
        <p className="text-lg mb-8 text-gray-300 leading-relaxed text-center lg:text-left">
          Building tomorrow's solutions today with cutting-edge AI, cloud infrastructure, 
          and immersive user experiences. Ready to revolutionize Japan's digital landscape.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link to="/projects" className="btn-cyber">
            ⚡ View Projects
          </Link>
          <Link to="/about" className="btn-outline-cyber">
            🌟 About Me
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
