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
        'light-text': '#040e16',
        'light-background': '#f6fafe',
        'light-primary': '#3a9fd9',
        'light-secondary': '#8584e7',
        'light-accent': '#7d5ce0',
        'dark-text': '#e9f3fb',
        'dark-background': '#010509',
        'dark-primary': '#268bc5',
        'dark-secondary': '#1a187b',
        'dark-accent': '#401fa3'
      },
    },
  },
  plugins: [daisyui],
}

