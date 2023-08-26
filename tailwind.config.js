module.exports = {
  content: [
    "./*.vue",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      minHeight: {
        dvh: "100dvh",
      },
    },
  },
  plugins: [],
};
