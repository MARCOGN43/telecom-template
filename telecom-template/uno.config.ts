// uno.config.ts
import { defineConfig } from 'unocss';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';
import presetWebFonts from '@unocss/preset-web-fonts';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        gabarito: 'Gabarito',
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: '#93248C',
      secondary: '#ff6347',
    },
    breakpoints: {
      sm: '480px',  // Personnalisation pour écrans petits
      md: '768px',  // Tablettes
      lg: '1024px', // Écrans moyens
      xl: '1280px', // Grands écrans
    },
  },
  shortcuts: {
    'icon-top-bar': 'p-2px bg-transparent border-none rounded-lg text-white',
    'icon-top-bar.active': 'p-2px bg-white border-none rounded-lg text-primary',
    'bg-app-downland-gradient': 'bg-[linear-gradient(176.54deg,#151314_0.59%,#1E1B1C_4.83%,#8B4614_8.83%,#BF611C_14.82%,#F47C24_21.85%,#97491E_24.4%,#391619_27.27%,#3F092F_33.07%,#5E0D46_40.83%,#39A2BA_53.38%,#1D515D_66.15%,#5E0D46_78.78%,#1F0417_98.78%)]',
    'app-library-btn': 'flex items-center p-2 gap-3 bg-black border-1 border-solid border-[#F47C24] rounded-10px',
  }
});
