export default defineNuxtConfig({
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
