
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563eb',
          dark: '#030712',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
