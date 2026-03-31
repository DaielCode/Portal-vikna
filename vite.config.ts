import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portal-vikna/',
  plugins: [react()],
  server: {
    port: 4001,
    open: true,
  },
});
