const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-f5283ad3.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "_bootstrap-6162a612.mjs"
    ]
  },
  "_bootstrap-6162a612.mjs": {
    "file": "bootstrap-6162a612.mjs",
    "isDynamicEntry": true,
    "dynamicImports": [
      "pages/index.vue"
    ],
    "css": [
      "bootstrap.8fd81345.css"
    ]
  },
  "pages/index.vue": {
    "file": "index-42d4101c.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-6162a612.mjs"
    ]
  }
};

export { client_manifest as default };
