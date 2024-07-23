/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        berlin: "Berlin-Sans-FB",
        anton: "Anton",
        bernard:"Bernard-MT",
        
      }
    },
  },
  plugins: [],
}