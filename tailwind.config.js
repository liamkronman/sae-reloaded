/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bgShift: {
          '0%, 100%': { backgroundColor: '#FFF7D1' }, // light gold
          '50%':      { backgroundColor: '#F5EDFF' }, // light lavender
        },
      },
      animation: {
        bgShift: 'bgShift 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

