/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Manrope': ['Manrope'],
        'OpenSans': ['Open Sans'],
      },
      screens: {
        'base': '1210px',
        'medium': '1110px'
      },
      colors: {
        'darkgray': '#232323',
        'space-gray': '#2A2A29',
        'yellow': '#EAC566',
        'space-yellow': '#EBE3CE',
        'green': '#00713D',
        'skyblue': '#1F6AAD',
        'wheat': '#E9E9EB',
        'space-wheat': '#EBE3CE',
      }
    },
  },
  plugins: [],
}

