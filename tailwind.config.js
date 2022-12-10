/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-d9': '#D9D9D9',
      },
    },
    maxWidth: {
      '1/2': '50%',
    }
  },
  plugins: [],
}
