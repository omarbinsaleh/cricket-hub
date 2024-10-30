/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#E7FE29'
      },
      
      backgroundColor : {
        'primary': '#E7FE29'
      },
      spacing : {
        'mx': '1280px'
      }
    },
  },
  plugins: [],
}

