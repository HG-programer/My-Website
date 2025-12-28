import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/My-Website/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8790',
        changeOrigin: true,
        ws: false,
      },
    },
  },
});