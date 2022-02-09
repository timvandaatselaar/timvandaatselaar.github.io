import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  nitro: {
    preset: "browser",
  },
  target: "static",
  ssr: false,
  router: {
    base: "/",
  },
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
