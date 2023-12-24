/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['REM', " sans-serif"], 
    },
    extend: {},
    boxShadow: {
      '3xl': '10px -1px 76px 28px rgba(0,255,148,0.51)',
      'mor': ' inset 9.91px 9.91px 15px #DC0223, inset -9.91px -9.91px 15px #FF022B'
    },
    backgroundImage: {
      'hero-pattern': "url('/src/assets/bgi1.png')",
      
    },
    dropShadow: {
      
      '4xl': [
                 '0px 0px 0 rgb(247,247,247)',
                 '0px 1px 0 rgb(238,238,238)',
                 '0px 7px 6px rgba(0,0,0,0.6)',
                 '0px 7px 1px rgba(0,0,0,0.5)',
                 '0px 0px 6px rgba(0,0,0,.2)'
      ]
    },
    colors: {
      'dark': '#000000',
      'red': '#d00328',
      'white': '#ffffff',
      'sky':'#3cffff',
      'pink': '#ff00e6',
      'blue': '#1d74cb',
    },
  },
  plugins: [],
}

