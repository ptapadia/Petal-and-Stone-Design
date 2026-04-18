/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#FDFBF9',
        'charcoal': '#2D2D2D',
        'warm-taupe': '#8B7E74',
        'light-taupe': '#E8E4E0',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
