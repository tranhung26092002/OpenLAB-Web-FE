/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner_homepage: "url('@assets/background/banner_homepage.jpg')",
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
    textShadow: {
      sm: "1px 1px 2px #B3B3B3",
      DEFAULT: "2px 2px 4px #B3B3B3",
      lg: "4px 4px 8px #B3B3B3",
      xl: "4px 4px 16px #B3B3B3",
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
