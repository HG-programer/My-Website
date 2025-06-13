import React from 'react';

const certifications = [
  { name: 'Google IT Support', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon Jr. Developer', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Generative AI – IIT Guwahati', logo: 'https://www.iitg.ac.in/sites/default/files/inline-images/logo_0.png' },
  { name: 'Duolingo (Japanese)', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Duolingo_logo.svg' },
];

const Certifications: React.FC = () => (
  <section className="relative min-h-[60vh] py-12 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden">
    {/* Decorative SVG */}
    <svg className="absolute top-0 left-0 w-full h-40 opacity-20 pointer-events-none" viewBox="0 0 1440 320">
      <path fill="#34d399" fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>
    <div className="relative z-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-blue-700 text-center">Certifications</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {certifications.map(cert => (
          <div key={cert.name} className="flex flex-col items-center bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img src={cert.logo} alt={cert.name} className="h-12 mb-2" />
            <span className="text-sm font-semibold text-gray-700 text-center">{cert.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;