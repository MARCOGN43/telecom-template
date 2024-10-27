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
      secondary: '#F47C24',
      scrollbar: '#313852',
    },
    breakpoints: {
      sm: '480px',  // Personnalisation pour écrans petits
      md: '768px',  // Tablettes
      lg: '1024px', // Écrans moyens
      xl: '1280px', // Grands écrans
    },
  },
  preflights: [
    {
      getCSS: () => `
        /* Scrollbar styles */
        .card-container::-webkit-scrollbar {
          height: 0.65rem;
        }

        .card-container::-webkit-scrollbar-track {
          background: scrollbar;
          border-radius: 50rem;
        }

        .card-container::-webkit-scrollbar-thumb {
          background: scrollbar;
          border-radius: 50rem;
        }
      `,
    },
  ],
  shortcuts: {
    'icon-top-bar': 'p-2px bg-transparent border-none rounded-lg text-white',

    'icon-top-bar.active': 'p-2px bg-white border-none rounded-lg text-primary hover:text-white',

    'bg-app-downland-gradient': 'bg-[linear-gradient(176.54deg,#151314_0.59%,#1E1B1C_4.83%,#8B4614_8.83%,#BF611C_14.82%,#F47C24_21.85%,#97491E_24.4%,#391619_27.27%,#3F092F_33.07%,#5E0D46_40.83%,#39A2BA_53.38%,#1D515D_66.15%,#5E0D46_78.78%,#1F0417_98.78%)]',

    'bg-hero-section-gradient': 'bg-[linear-gradient(164.83deg,_#EB9CE6_0%,_#F1F1F1_20.02%,_#B376A0_44.76%,_#794675_59.66%,_#94428F_75%,_#CB3AC2_100%)]',

    'app-library-btn': 'flex items-center p-2 gap-3 bg-black border-1 border-solid border-secondary rounded-10px',

    'learn-more-btn': 'flex p-2 bg-secondary border-1 border-solid border-black rounded-10px',

    'see-offers-btn': 'flex px-3 py-2 bg-primary text-white border-1 border-solid border-primary rounded-10px',
    
    'card-container': 'flex gap-5 pb-4 overflow-x-scroll snap-x snap-mandatory',
    'card-container-scrollbar': `
      [&::-webkit-scrollbar]:h-[1rem]
      [&::-webkit-scrollbar-track]:bg-secondary [&::-webkit-scrollbar-track]:rounded-[10rem]
      [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-[2rem]
    `,
    'card': 'min-w-fit object-contain max-h-fit snap-start relative',
  }
});