import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module '/Users/tim/projects/timvandaatselaar.github.io/node_modules/nuxt3/dist/pages/runtime/composables' {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}