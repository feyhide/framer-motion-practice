/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        blackbg: "#000",
        headerColor: "#111",
        textc: "#1d1d1f",
        white: "#FFFFFF",
        
      }
    },
  },
  plugins: [],
}