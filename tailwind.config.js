/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1d4ed8',
          pink: '#ec4899',
        },
        sakura: '#F9E3E8',
        vermilion: '#E60026',
        indigo: '#1F2D5C',
        matcha: '#7BA23F',
        washi: '#FAF7F2',
        sumi: '#444444',
        gold: '#C9A646',
      },
      fontFamily: {
        'jp-sans': ['"Noto Sans JP"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'jp-serif': ['"Noto Serif JP"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
