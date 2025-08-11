import React from 'react';
import PageSection from '../components/PageSection';

const Home: React.FC = () => (
  <PageSection id="home" className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-700">Welcome to My Portfolio</h1>
    <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto">
      I’m Harshit Gupta, a passionate developer with a love for building beautiful, accessible, and modern web experiences.
    </p>
    <a href="#projects" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
      View My Work
    </a>
  </PageSection>
);

export default Home;
