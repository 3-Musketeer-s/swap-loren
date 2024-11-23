/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spacegrotesk: ['SpaceGrotesk-Bold', 'sans-serif'],
      
        mulish: ['mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
  
}

