import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/projects', label: 'Projects' },
  { to: '/japan', label: 'Japan Vision' },
  { to: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700 whitespace-nowrap hover:text-blue-900 transition"
        >
          Harshit Gupta
        </Link>
        <button
          className="md:hidden text-gray-700 focus:outline-none ml-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        {/* Desktop links */}
        <div className="hidden md:flex md:items-center md:space-x-6 ml-8">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-700 transition ${
                  isActive ? 'font-bold text-blue-700 underline' : ''
                }`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t shadow transition-all duration-200 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {navLinks.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `block px-4 py-2 text-gray-700 hover:text-blue-700 transition ${
                isActive ? 'font-bold text-blue-700 underline' : ''
              }`
            }
            onClick={() => setOpen(false)}
            end={link.to === '/'}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;