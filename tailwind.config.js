/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "system-ui"],
      },
      colors: {
        light: {
          background: '#ffffff',
          text: '#333333',
          primary: '#dc2626',
        },
        dark: {
          background: '#1a202c',
          text: '#f7fafc',
          primary: '#f87171',
        },
      },
    },
  },
  plugins: [],
}