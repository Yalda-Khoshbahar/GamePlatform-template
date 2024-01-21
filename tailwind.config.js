/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      },
      colors : {
        'primary' : '#FA9021',
        'brown' : '#4A2800',
        'gray' : '#FFFFFF1C'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      screens: {
        '320' : '320px',
        // => @media (min-width: 320px) { ... }
      }
    },
  },
  plugins: [],
}

