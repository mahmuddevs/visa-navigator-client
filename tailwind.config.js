/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#1d232a'
      }
    },
  },
  plugins: [daisyui],
}

