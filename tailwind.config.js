/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      spaceGotesk: ['Space Grotesk', 'sans-serif']
    },
    colors: {
      primary: '#676CDB',
      secondary: '#222A36',
      base: '#FFFFFF',
      transparent: '#ffffff00',
      accent: '#C4C4C4'
    }
  },
  plugins: [],
}