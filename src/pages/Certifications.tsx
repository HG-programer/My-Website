import React from 'react';
import PageSection from '../components/PageSection';

const certifications = [
  { name: 'Google IT Support', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon Jr. Developer', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Generative AI – IIT Guwahati', logo: 'https://www.iitg.ac.in/sites/default/files/inline-images/logo_0.png' },
  { name: 'Duolingo (Japanese)', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Duolingo_logo.svg' },
];

const Certifications: React.FC = () => (
  <PageSection id="certifications">
    <h2 className="text-4xl font-bold mb-10 text-blue-700 text-center">Certifications</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {certifications.map(cert => (
        <div key={cert.name} className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 gap-4">
          <img src={cert.logo} alt={`Logo for ${cert.name} certification`} className="h-16 w-auto object-contain flex-shrink-0 mb-4 sm:mb-0" role="img" />
          <span className="text-sm font-semibold text-gray-700">{cert.name}</span>
        </div>
      ))}
    </div>
  </PageSection>
);

export default Certifications;
