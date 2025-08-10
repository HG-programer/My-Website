import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Projects = lazy(() => import('./pages/Projects'));
const Japan = lazy(() => import('./pages/Japan'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App: React.FC = () => (
  <HelmetProvider>
    <Router>
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="projects" element={<Projects />} />
            <Route path="japan" element={<Japan />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  </HelmetProvider>
);

export default App;
