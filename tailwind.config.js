/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    blue: "#1fb6ff",
    purple: "#7e5bef",
    pink: "#ff49db",
    orange: "#ff7849",
    green: "#13ce66",
    yellow: "#ffc82c",
    "gray-dark": "#273444",
    gray: "#8492a6",
    "gray-light": "#d3dce6",
  },
  plugins: [require("daisyui")],
  darkMode: "class",

  theme: {
    fontFamily: {
      Josefin: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      raleway: ["raleaway", ...defaultTheme.fontFamily.sans],
      poppins: ["poppins ", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: "0px",
      // => @media (min-width: 640px) { ... }

      md: "767px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {},
  },
};
