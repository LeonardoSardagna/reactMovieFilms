import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      outline: {
        custom: '1px solid #A881E6',
      },
      colors: {
        customColor: '#A881E6',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(24, 24, 27) 0%, rgba(5,59,163,1) 100%)',
        'custom-botao': 'linear-gradient(0deg, rgba(24, 24, 27) 0%, rgba(5,59,163,1) 100%)',
        'custom-botao-top': 'radial-gradient(circle, rgba(24, 24, 27) 0%, rgba(5,59,163,1) 100%)',
        'custom-genero': 'linear-gradient(90deg, rgba(24, 24, 27) 0%, rgba(5,59,163,1) 100%)',
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      screens: {
        // Max-width breakpoints
        'max-tablet': { 'max': '719px' }, // => @media (max-width: 719px) { ... }
        'max-laptop': { 'max': '1023px' }, // => @media (max-width: 1023px) { ... }
        'max-desktop': { 'max': '1279px' }, // => @media (max-width: 1279px) { ... }
        'tablet': '640px',   // => @media (min-width: 640px) { ... }
        'laptop': '1024px',  // => @media (min-width: 1024px) { ... }
        'desktop': '1280px', // => @media (min-width: 1280px) { ... }
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    function ({ addVariant}) {
      addVariant('options-view-button-checked', '&:checked + #botao-selecionado #valor-selecionado');
      addVariant('options-view-button-checked-chevron-down', '&:checked + #botao-selecionado #lucideIcons #icone-down');
      addVariant('options-view-button-checked-chevron-up', '&:checked + #botao-selecionado #lucideIcons #icone-up');
    },
  ]
}

