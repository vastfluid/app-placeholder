/** @type {import('tailwindcss').Config} */

const FluidType = require('tailwindcss-fluid-type');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
      },
      fontFamily: {
        Archivo: ['Archivo', 'sans-serif'],
        Jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        B0: '#ffffff',
        B50: '#BFBFBF',
        B70: '#A3A3A3',
        B300: '#575757',
        B500: '#64748B',
        B600: '#2E2E2E',
        B700: '#A3A3A3',
        B900: '#000000',
        Black: '#1d1d1d',
        Link: '#2779F6',
        Primary: '#0157FF',
        PrimaryHover: '#014EE6',
        PrimaryActive: '#0146CC',
        Secondary: '#6EDDFF',
        SecondaryHover: '#0146CC',
        SecondaryActive: '#58B1CC',
        InfoNormal: '#1ABC9C',
        Neutral10: '#486284',
        Neutral500: '#64748B',
        TabBackground: '#040033',
        TabActive: '#53A6BF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    FluidType({
      values: {
        '3xl': [4, 1.4],
      },
    }),
  ],
};
