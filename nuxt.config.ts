import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  css: ["assets/css/tailwind.css"],
  app: {
    cdnURL: "./",
  },
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
