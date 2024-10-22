/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': "#003FB4",
        'gray': {
          'light': '#B7B7B7',
          'dark': "#6B6B6B",
        }
      },
      fontFamily: {
        'lora': ["Lora", 'serif'],
        'workSans': ["Work Sans", 'sans-serif'],
      },
      boxShadow: {
        sm: "4px 10px 24px 0px #0000001A"
      }
    },
  },
  plugins: [],
}

