module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['JetBrains Mono', 'monospace'], // замените YourFont на название вашего шрифта
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};