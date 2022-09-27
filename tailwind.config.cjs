/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      animation:{
        shine: "shine 1s",
      },
      keyframes:{
        "100%":{left: "125%"}
      },
      
    },
  },
  plugins: [],
}


