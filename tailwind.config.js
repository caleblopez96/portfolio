/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto Mono", "system-ui"],
      },
      colors: {
        light: {
          background: '#ffffff',
          text: '#333333',
          primary: '#dc2626', // Tailwind's red-600
        },
        dark: {
          background: '#1a202c', // Tailwind's gray-900
          text: '#f7fafc', // Tailwind's gray-100
          primary: '#f87171', // Tailwind's red-400
        },
      },
    },
  },
  plugins: [],
}