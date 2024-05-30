/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        nova:['Ibarra Real Nova'],
      },
    },
      screens:{
        'sm': '576px',

        'md': '900px',

        'lg': '1020px',
      }
     
    },
  plugins: [],
}

