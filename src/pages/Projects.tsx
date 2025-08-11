import React from 'react';
import PageSection from '../components/PageSection';

const projects = [
  { name: 'Portfolio Website', description: 'A modern, responsive portfolio built with React, Vite, and Tailwind CSS.' },
  { name: 'E-commerce App', description: 'A full-featured e-commerce platform with shopping cart and payment integration.' },
  { name: 'Blog Platform', description: 'A clean, accessible blog platform with markdown support.' },
  { name: 'Weather Dashboard', description: 'A real-time weather dashboard using public APIs.' },
];

const Projects: React.FC = () => (
  <PageSection id="projects">
    <h2 className="text-4xl font-bold mb-10 text-blue-700 text-center">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
      {projects.map(project => (
        <div key={project.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2 text-blue-700">{project.name}</h3>
          <p className="text-gray-700">{project.description}</p>
        </div>
      ))}
    </div>
  </PageSection>
);

export default Projects;
