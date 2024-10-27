// vite.config.js
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  plugins: [
    UnoCSS(), // Utilisation de UnoCSS sans Vue.js
  ],
  root: 'src', // Le dossier source pour les fichiers HTML
  base: '/telecom-template/',
});
