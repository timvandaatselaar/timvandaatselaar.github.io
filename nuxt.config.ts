import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  nitro: {
    preset: "server",
  },
  css: ["assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
