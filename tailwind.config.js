/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#9A998B",
        primary: "#EEEEEE",
        secondary: "#2C2C2C",
        "red-accent": "#EC6969",
      },
    },
  },
  plugins: [],
};
