/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        test: {
          300: "#ffcc00",
        },
      },
    },
  },
  plugins: [],
};
