/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "5xl": "1.95px 1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15)"
      },
      screens: {
        'md': '880px',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}

