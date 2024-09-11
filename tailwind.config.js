/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./src/components/**/*.{js,ts,tsx,jsx}",
    "./src/container/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    screens: {
      xs: { max: "575px" },
      sm: { min: "576px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
    extend: {
      colors: {
        "rgb-4": "rgba(238, 227, 232, 0.7)",
      },
      backgroundImage: {
        banner_homepage: "url('@assets/background/nonbg-01.png')",
        section_page: "url('@assets/background/Remove-bg.png')",
      },
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
        changa: ['"Changa", sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
    },
  },
  plugins: [],
};
