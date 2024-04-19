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
        'medium': '1110px',
        'mdd': '784px',
        'smm': '700px'
      },
      colors: {
        'darkgray': '#232323',
        'space-gray': '#2A2A29',
        'spaced-gray': '#191919',
        'white-gray': '#656565',
        'yellow': '#EAC566',
        'space-yellow': '#EBE3CE',
        'green': '#00713D',
        'skyblue': '#1F6AAD',
        'wheat': '#E9E9EB',
        'space-wheat': '#EBE3CE',
      },
      padding: {
        '5.5': '22px'
      }
    },
  },
  plugins: [],
}

