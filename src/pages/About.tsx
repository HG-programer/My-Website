import React from 'react';
import PageSection from '../components/PageSection';

const About: React.FC = () => (
  <PageSection id="about">
    <h2 className="text-4xl font-bold mb-6 text-blue-700">About Me</h2>
    <p className="text-lg text-gray-700 max-w-2xl mb-4">
      I’m a developer with a strong background in modern web technologies, always eager to learn and take on new challenges. My focus is on creating accessible, responsive, and visually appealing applications.
    </p>
    <ul className="list-disc list-inside text-left max-w-xl mx-auto text-gray-600">
      <li>Modern React (Hooks, Functional Components)</li>
      <li>TypeScript & JavaScript</li>
      <li>Tailwind CSS</li>
      <li>Accessibility & Responsive Design</li>
      <li>Continuous Learning</li>
    </ul>
  </PageSection>
);

export default About;
