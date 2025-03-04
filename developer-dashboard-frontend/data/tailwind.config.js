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
        back:"rgba(127,127,127,0.5)",
        navc:"#000720",
        drop:"#8a94a6",
        
      },
      fontFamily:{
        oleo:["Oleo Script",'system-ui']
      }
    },
  },
  plugins: [],
}

