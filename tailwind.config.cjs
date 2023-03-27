/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          lightest: "#ABADB1",
          lighter: "#585B63",
          light: "#303136",
          DEFAULT: "#2e026d",
          dark: "#15162c",
        },
        link: {
          DEFAULT: "#1D9BF0",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
