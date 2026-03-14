import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@nexusynth/ui': path.resolve(__dirname, '../..', 'packages/ui/src'),
      '@nexusynth/types': path.resolve(__dirname, '../..', 'packages/types/src'),
    },
  },
  server: {
    port: Number(process.env.WEB_PORT) || 5173,
  },
});
