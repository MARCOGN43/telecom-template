import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  plugins: [
    UnoCSS({
      configFile: 'uno.config.ts',
    }),
  ],
  root: 'src',
  base: './', // Base pour les liens relatifs
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  publicDir: '../public',
  server: {
    open: true,
  },
});
