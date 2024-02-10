/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins'],
      },
      screens: {
        xs: { max: '600px' },
        md: '940px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
};
