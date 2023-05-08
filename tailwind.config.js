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
    extend: {},
  },
};
