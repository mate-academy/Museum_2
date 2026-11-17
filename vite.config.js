import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Museum_2/',
  build: {
    rollupOptions: {
      input: {
        uk: resolve(__dirname, 'index.html'),
        en: resolve(__dirname, 'en/index.html'),
      },
    },
  },
});
