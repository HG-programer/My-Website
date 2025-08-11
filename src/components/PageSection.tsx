import React from 'react';

interface PageSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({ id, className = '', children }) => (
  <section id={id} className={`py-16 px-4 max-w-6xl mx-auto ${className}`}>
    {children}
  </section>
);

export default PageSection;
