import React from 'react';

const About: React.FC = () => (
  <section className="relative min-h-[60vh] flex flex-col items-center justify-center py-12 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
    {/* Decorative SVG */}
    <svg className="absolute top-0 left-0 w-full h-40 opacity-20 pointer-events-none" viewBox="0 0 1440 320">
      <path fill="#a78bfa" fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>
    <div className="relative z-10 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">About Me</h1>
      <p className="mb-4 text-gray-700">
        Hi, I’m Harshit Gupta. I blend my passion for technology and pharmacy to create solutions that heal and empower. My journey began with the abacus, sparking a lifelong love for logic and numbers.
      </p>
      <ul className="mb-4 list-disc list-inside text-gray-700 text-left inline-block">
        <li>Empathy</li>
        <li>Resilience</li>
        <li>Creativity</li>
      </ul>
      <div className="border-l-4 border-blue-500 pl-4 text-gray-600 text-left inline-block mb-4">
        <p>2014: Started with abacus</p>
        <p>2018: Entered pharmacy</p>
        <p>2023: Transitioned to tech</p>
        <p>2025: Pursuing opportunities in Japan</p>
      </div>
    </div>
  </section>
);

export default About;