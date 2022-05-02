import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  nitro: {
    preset: "node",
  },
  target: "static",
  ssr: false,
  generate: { crawler: true },
  css: ["assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
