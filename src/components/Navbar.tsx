import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { switchLanguage } from '../i18n';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/certifications', label: t('nav.certifications') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/japan', label: t('nav.japan') },
    { to: '/contact', label: t('nav.contact') },
  ];
  const toggleLang = () => switchLanguage(i18n.language === 'en' ? 'ja' : 'en');

  return (
    <nav className="glass sticky top-0 z-50 border-b border-cyan-400/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
        >
          <div className="relative w-10 h-10">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Harshit Gupta"
              className="w-full h-full rounded-full object-cover border-2 border-cyan-400 shadow-lg neon-glow absolute inset-0"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 border-2 border-cyan-400 shadow-lg neon-glow hidden items-center justify-center">
              <span className="text-white font-bold text-sm">HG</span>
            </div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            Harshit Gupta
          </span>
        </Link>
        <button
          className="md:hidden text-cyan-400 hover:text-cyan-300 focus:outline-none ml-2 transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-controls="primary-navigation"
          {...(open ? { 'aria-expanded': true } : { 'aria-expanded': false })}
          data-state={open ? 'open' : 'closed'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        {/* Desktop links */}
        <div className="hidden md:flex md:items-center md:space-x-6 ml-8" id="primary-navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative text-gray-300 hover:text-cyan-400 transition-all duration-300 px-3 py-2 rounded-md ${
                  isActive ? 'text-cyan-400 bg-cyan-400/10' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={toggleLang}
            className="px-3 py-2 text-xs font-semibold rounded-md border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 transition"
          >
            {i18n.language === 'en' ? '日本語' : 'EN'}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden glass border-t border-cyan-400/20 transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 ${
                isActive ? 'text-cyan-400 bg-cyan-400/10 border-l-2 border-cyan-400' : ''
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
        <button
          onClick={toggleLang}
          className="w-full text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 border-t border-cyan-400/10"
        >
          {i18n.language === 'en' ? '日本語' : 'EN'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;