import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; // keep Home eagerly loaded (landing performance)

// Lazy load secondary routes to reduce initial bundle size
const About = lazy(() => import('./pages/About'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Projects = lazy(() => import('./pages/Projects'));
const Japan = lazy(() => import('./pages/Japan'));
const Contact = lazy(() => import('./pages/Contact'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        {/* Skip link for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-cyan-600 focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >Skip to content</a>
        <Navbar />
        <main id="main" className="pt-16 min-h-screen">
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-32 text-cyan-300 animate-pulse">
                <span className="text-sm tracking-widest">LOADING…</span>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/japan" element={<Japan />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
