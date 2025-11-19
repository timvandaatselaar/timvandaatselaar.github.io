import { u as useHead } from './index-88e9f29c.mjs';
import { mergeProps, useSSRContext } from 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/unhead/dist/index.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/hookable/dist/index.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/unctx/dist/index.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/h3/dist/index.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/ufo/dist/index.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/destr/dist/index.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/scule/dist/index.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/klona/dist/index.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/ohash/dist/index.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/tim/projects/timvandaatselaar.github.io/node_modules/pathe/dist/index.mjs';

const _sfc_main = {
  setup() {
    useHead({
      title: "Tim van Daatselaar",
      description: "I'm Tim, a Dutch Frontend Developer. I work at and am specialized in coding templates with TailwindCSS and Vue.js."
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-dvh items-center py-20 px-8" }, _attrs))}><div class="mx-auto w-full max-w-5xl"><div class="max-w-2xl"><p class="text-3xl font-semibold leading-snug lg:text-5xl lg:leading-snug"> I&#39;m Tim, a Dutch Frontend Developer. I work at <a href="https://gravity.nl" target="_blank" class="text-blue-500 underline hover:no-underline">Gravity</a> and am specialized in <a href="https://tailwindcss.com/" target="_blank" class="text-blue-500 underline hover:no-underline">Tailwind CSS</a> and <a href="https://vuejs.org/" target="_blank" class="text-blue-500 underline hover:no-underline">Vue.js</a>. </p><div class="mt-10"><h2 class="text-xl font-bold">Capitals</h2><p class="mt-2 text-xl leading-relaxed text-gray-700"> Currently, I\u2019m working on <a href="https://fantasytips.nl" target="_blank" class="text-blue-500 underline hover:no-underline">Fantasytips.nl</a> , a platform that provides tips and advice for fantasy football players in ESPN Fantasy Football and Fifa Fantasy WK 2026. </p></div><div class="mt-10 flex items-center gap-3"><figure class="relative h-8 w-8 overflow-hidden rounded-full bg-gray-200"><img class="absolute top-0 left-0 h-full w-full object-cover" src="https://github.com/timvandaatselaar.png" alt="Tim van Daatselaar"></figure><h1 class="text-lg font-semibold">Tim van Daatselaar</h1></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-816bdbe1.mjs.map
