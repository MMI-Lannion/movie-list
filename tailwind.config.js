/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
   "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme : {
    typography :{
      xs : {
        css : { fontSize : '0.75rem'}
      },
      sm	: {
        css : { fontSize : '0.875rem'}
      },
      base : {
        css : { fontSize : '1rem'}
      },
      lg : {
        css : { fontSize : '1.125rem'}
      },
      xl : {
        css: { fontSize : '1.25rem'}
      },
      '2xl' : {
        css : { fontSize : '1.5rem'}
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"), 
    require("daisyui")
  ]
}