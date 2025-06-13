import React from 'react';

const Contact: React.FC = () => (
  <section className="relative min-h-[60vh] flex flex-col items-center justify-center py-12 bg-gradient-to-br from-blue-50 via-white to-pink-50 overflow-hidden">
    {/* Decorative SVG */}
    <svg className="absolute top-0 left-0 w-full h-40 opacity-20 pointer-events-none" viewBox="0 0 1440 320">
      <path fill="#60a5fa" fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>
    <div className="relative z-10 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Contact</h1>
      <p className="mb-6 text-gray-700">Feel free to reach out for collaboration or opportunities!</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <a
          href="mailto:your.email@example.com"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Email
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;