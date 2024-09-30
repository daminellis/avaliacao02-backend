// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173,       // Define a porta para 4173
    host: '0.0.0.0',  // Permite conexões de fora do container
  },
});
