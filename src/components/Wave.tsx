import React from 'react';

interface WaveProps {
  fill?: string;
  className?: string;
  direction?: 'normal' | 'flip';
  /** Height of the svg (Tailwind class) default h-40 */
  heightClass?: string;
  opacity?: number; // 0 - 1
}

const PATH_D = 'M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,320L0,320Z';
// Adjusted path closes at bottom to avoid filling entire top block

const Wave: React.FC<WaveProps> = ({ fill = '#60a5fa', className = '', direction = 'normal', heightClass = 'h-40', opacity = 0.2 }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    preserveAspectRatio="none"
    className={`pointer-events-none w-full ${heightClass} ${direction === 'flip' ? 'rotate-180' : ''} -z-10 ${className}`}
    viewBox="0 0 1440 320"
  >
    <path fill={fill} fillOpacity={opacity} d={PATH_D}></path>
  </svg>
);

export default Wave;
