/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#008080',
          light: '#009999',
          dark: '#006666',
        },
        secondary: {
          DEFAULT: '#808080',
          light: '#999999',
          dark: '#666666',
        },
      },
    },
  },
  plugins: [],
}