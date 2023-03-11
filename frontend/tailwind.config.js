/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1140px',
      '2xl': '1200px',
    },
    container: {
      padding: '1rem',
      center: true,
    },
  },
  plugins: [],
}
