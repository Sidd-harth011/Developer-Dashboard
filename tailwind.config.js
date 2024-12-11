/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custompurple:'#da94ec',
        icon:"#8d8d8d",
        back:"rgba(127,127,127,0.5)"
      }
    },
  },
  plugins: [],
}

