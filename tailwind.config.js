const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    screens: {  
      'tiny': '400px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        lpBg: "#e6e6e6",
        lpBlue: "#3a3ef2",
        lpOv: "#000000e6",
        lpCon: "#4654dd",
        lpPin: "#8874ff",
        lpRed: "#ff4646",
        lpSr: "#1e1826",
        lpNc: "#9e9be0",
        lpCa: "#858585",
        lpOp: "#11111180",
        lpOrange: "#ff9a18"

      },
      borderRadius: {
        lgB: "3rem"
      },
      fontFamily: {
        sans: " 'Inter', sans-serif "
      },
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
