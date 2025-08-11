import React from 'react';
import PageSection from '../components/PageSection';

const Japan: React.FC = () => (
  <PageSection id="japan">
    <h2 className="text-4xl font-bold mb-6 text-blue-700">Japan Vision</h2>
    <p className="text-lg text-gray-700 max-w-2xl mb-4">
      My vision for Japan is to bridge technology and culture, creating innovative solutions that respect tradition while embracing the future. I am passionate about language learning, cross-cultural collaboration, and building tools that empower people globally.
    </p>
    <ul className="list-disc list-inside text-left max-w-xl mx-auto text-gray-600">
      <li>Language & Technology</li>
      <li>Cross-cultural Collaboration</li>
      <li>Empowering Global Users</li>
    </ul>
  </PageSection>
);

export default Japan;
