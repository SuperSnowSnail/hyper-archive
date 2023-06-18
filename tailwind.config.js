/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        twt: [
          'var(--font-chirp)',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        twt: {
          light: '#cfd9de',
          DEFAULT: '#536471',
          dark: '#0f1419',
        },
      },
      width: {
        'twt-img': '131px',
      },
      height: {
        'twt-img': '130px',
      },
      transitionProperty: {
        twt: 'background-color',
      },
      fontSize: {
        twt: ['15px', '20px'],
      },
    },
  },
  plugins: [],
};
