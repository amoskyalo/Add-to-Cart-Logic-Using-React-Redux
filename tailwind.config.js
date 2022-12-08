/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        navColor: '#244886',
        cartColor: '#f70000',
        greyColor: '#eeeeee'
      },
    },
  },
  plugins: [],
}