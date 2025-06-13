import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with React and Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    link: 'https://github.com/your-github/portfolio',
    demo: 'https://your-portfolio-demo.com',
  },
  {
    title: 'Pharmacy Inventory App',
    description: 'A full-stack app for managing pharmacy inventory and sales.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    link: 'https://github.com/your-github/pharmacy-inventory',
    demo: 'https://your-pharmacy-demo.com',
  },
];

const Projects: React.FC = () => (
  <section className="relative min-h-[80vh] py-12 bg-gradient-to-br from-blue-50 via-white to-pink-50 overflow-hidden">
    {/* Decorative SVG */}
    <svg className="absolute top-0 left-0 w-full h-64 opacity-20 pointer-events-none" viewBox="0 0 1440 320">
      <path fill="#60a5fa" fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>

    {/* Banner */}
    <div className="relative z-10 w-full h-48 bg-cover bg-center flex items-center justify-center mb-8 rounded-lg shadow"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')" }}>
      <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Projects</h1>
    </div>

    {/* Project Cards */}
    <div className="relative z-10 max-w-4xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
      {projects.map(project => (
        <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
          <div className="p-6 flex-1 flex flex-col">
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">{project.title}</h2>
            <p className="mb-4 text-gray-700 flex-1">{project.description}</p>
            <div className="mt-auto flex space-x-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-200 text-blue-700 rounded hover:bg-gray-300 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;