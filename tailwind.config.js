/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      screens:{
        'sm': '576px',

        'md': '900px',

        'lg': '1020px',
      }
    },
  plugins: [],
}

