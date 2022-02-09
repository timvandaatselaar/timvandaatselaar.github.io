import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  vite: {
    logLevel: "info",
  },
  css: ["assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
