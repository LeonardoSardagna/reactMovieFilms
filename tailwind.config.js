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
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(24, 24, 27) 0%, rgba(5,59,163,1) 100%)',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

