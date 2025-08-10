import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from './Chatbot';

const Layout: React.FC = () => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-3 py-2 rounded"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="container mx-auto px-4 py-4 min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
};

export default Layout;
