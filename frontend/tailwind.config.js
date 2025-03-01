/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary: "#3674B5", 
        secondary:"#578FCA", 
        accent: "#A1E3F9",  
        background: "#D1F8EF", 
      }
    },
  },
  plugins: [],
}

