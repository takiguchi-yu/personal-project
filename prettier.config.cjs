/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tabWidth: 2,
  semi: true,
};

module.exports = config;
