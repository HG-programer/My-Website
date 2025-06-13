import React from 'react';

const Japan: React.FC = () => (
  <section className="relative min-h-[60vh] flex flex-col items-center justify-center py-12 bg-gradient-to-br from-red-50 via-white to-blue-50 overflow-hidden">
    {/* Decorative SVG Wave */}
    <svg className="absolute top-0 left-0 w-full h-40 opacity-20 pointer-events-none" viewBox="0 0 1440 320">
      <path fill="#f87171" fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>
    {/* Japan Illustration */}
    <img
      src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f1ef-1f1f5.png"
      alt="Japan Flag"
      className="w-24 h-24 mb-6 relative z-10"
      style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))' }}
    />
    <div className="relative z-10 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">My Japan Vision</h1>
      <p className="mb-4 text-gray-700">
        Japan inspires me with its blend of tradition and innovation. My journey learning Japanese has deepened my appreciation for its culture and tech-driven society.
      </p>
      <p className="mb-4 text-gray-700">
        I admire Japan’s work ethic, attention to detail, and commitment to quality—values I strive to embody in my own work.
      </p>
      <p className="italic text-gray-600">
        The abacus was my symbolic starting point, and now, I aim to contribute to Japan’s tech landscape.
      </p>
    </div>
  </section>
);

export default Japan;