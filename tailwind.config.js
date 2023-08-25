/** @type {import('tailwindcss').Config} */
const { join } = require("path");

module.exports = {
  darkMode: "class",
  content: [
    join(__dirname, "./app/**/*.{js,ts,jsx,tsx,mdx}"),
    join(__dirname, "./pages/**/*.{js,ts,jsx,tsx,mdx}"),
    join(__dirname, "./components/**/*.{js,ts,jsx,tsx,mdx}"),
    join(__dirname, "./node_modules/flowbite-react/**/*.js"),
    join(__dirname, "./public/**/*.html"),

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("flowbite/plugin")],

  theme: {
    screens: {
      mobile: "320px",
      // => @media (min-width: 320px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
};
