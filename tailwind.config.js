/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0a0a0f",
          800: "#0f0f18",
          700: "#14141f",
          600: "#1a1a2a",
          500: "#222236",
          400: "#2a2a40",
        },
        accent: {
          DEFAULT: "#10b981",
          light: "#34d399",
          dark: "#059669",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};