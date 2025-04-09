/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#1A1A1A',
        accent: '#937D63',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      height: {
        'screen-90': '90vh',
      },
    },
  },
  plugins: [],
};