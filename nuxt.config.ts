export default defineNuxtConfig({
  target: "static",
  css: ["assets/css/tailwind.css"],
  app: {
    cdnURL: "./",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
