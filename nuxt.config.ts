import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  ssr: false,
  css: ["assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
