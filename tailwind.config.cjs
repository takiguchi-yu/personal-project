/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        base: {
          dark: "#15162c",
          DEFAULT: "#2e026d",
          light: "#303136",
          lighter: "#585B63",
          lightest: "#ABADB1",
        },
        link: {
          DEFAULT: "#1D9BF0",
        },
      },
    },
  },
};

module.exports = config;
