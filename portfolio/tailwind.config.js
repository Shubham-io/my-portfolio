/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


// tailwind.config.js
module.exports = {

   content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],

  theme: {
    extend: {
      keyframes: {
        'breath-glow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
      },
      animation: {
        'breath-glow': 'breath-glow 9s ease-in-out infinite',
      },
    },
  },
}



