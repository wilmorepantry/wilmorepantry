module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: [
          "Roboto Slab",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif"
        ],
        sans: [
          "Noto Sans",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji"
        ]
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
