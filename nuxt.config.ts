import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  nitro: {
    preset: "client",
  },
  css: ["assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
