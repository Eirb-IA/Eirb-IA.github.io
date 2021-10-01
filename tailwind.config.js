module.exports = {
  purge: {
        enabled: false,
        preserveHtmlElements: false,
        content: ["**/*.html", "**/*.js"],
        options: {
        safelist: ["dark"],
        },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
