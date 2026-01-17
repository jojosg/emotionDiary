/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/util/**/*.{js,ts}'],
  theme: {
    extend: {
      screens: {
        tablet: '744px',
        desktop: '1280px',
      },
    },
  },
  plugins: [require('daisyui')],
};
