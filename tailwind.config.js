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
      backgroundImage:{
        'custom-gradient': 'linear-gradient(0deg, rgba(15,15,15,1) 0%, rgba(99,93,87,1) 62%)',
      }
    },
      screens:{
        'sm': '576px',

        'md': '900px',

        'lg': '1020px',
      }
     
    },
  plugins: [],
}

