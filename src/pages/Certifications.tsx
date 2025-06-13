import React from 'react';

// Data for the certifications remains the same
const certifications = [
  { name: 'Google IT Support', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon Jr. Developer', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Generative AI – IIT Guwahati', logo: 'https://www.iitg.ac.in/sites/default/files/inline-images/logo_0.png' },
  { name: 'Duolingo (Japanese)', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Duolingo_logo.svg' },
];

const Certifications: React.FC = () => (
  // STEP 1: Main container
  // - `relative`: Creates a "stacking context". Absolutely positioned children
  //   (like our waves) will be positioned relative to this container.
  // - `overflow-hidden`: Prevents the background shapes from extending
  //   beyond the component's boundaries.
  <section className="relative bg-white py-20 min-h-[70vh] overflow-hidden">
    
    {/* STEP 2: Background Decorative Shapes */}
    {/* We place these shapes first in the code. To send them behind the content,
        we give them a negative z-index. */}

    {/* Top Green Wave */}
    <div
      className="absolute top-0 left-0 w-full h-48 bg-teal-400 -z-10"
      style={{
        clipPath: 'ellipse(100% 55% at 50% 45%)', // Creates a simple curve
      }}
    ></div>

    {/* Bottom Blue Wave */}
    <div
      className="absolute bottom-0 left-0 w-full h-64 bg-blue-600 -z-10"
      style={{
        clipPath: 'ellipse(80% 60% at 50% 100%)', // Creates the bottom wave
      }}
    ></div>

    {/* STEP 3: Content Container */}
    {/* This container holds the heading and the certification cards.
        Because its siblings (the waves) have a negative z-index, this
        content will automatically appear on top. We don't need to add
        a z-index here, but using `relative` is good practice. */}
    <div className="relative max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-gray-800 text-center">
        Certifications
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {certifications.map(cert => (
          <div
            key={cert.name}
            className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={cert.logo}
              alt={`${cert.name} logo`}
              className="h-16 mb-4 object-contain"
            />
            <span className="text-sm font-semibold text-gray-700">
              {cert.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;