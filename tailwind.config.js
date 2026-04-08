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
          DEFAULT: '#2D5BFF',
          hover: '#1a41cc'
        },
        background: {
          DEFAULT: '#F8F9FB',
          card: '#FFFFFF'
        },
        text: {
          main: '#1F2937',
          muted: '#6B7280'
        }
      },
    },
  },
  plugins: [],
}
