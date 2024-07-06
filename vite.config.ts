import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this is set correctly
    assetsDir: 'assets', // Ensure your assets are correctly placed
  },
});
