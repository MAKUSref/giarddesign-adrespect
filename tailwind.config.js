/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      height: {
        "screen-1.2": "120vh",
        "screen-1.5": "150vh",
        "screen-2": "200vh",
      },
      colors: {
        primary: "#1B5B31",
        secondary: "#DCC1AB",
        "secondary-light": "#F5F0EC",
        black: "#111111",
      },
      fontFamily: {
        monsterrat: ['Monsterrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
