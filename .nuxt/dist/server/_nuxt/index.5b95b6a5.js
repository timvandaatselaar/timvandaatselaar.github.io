import { u as useHead, _ as _export_sfc } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "destr";
import "h3";
import "defu";
import "@vue/shared";
const _sfc_main = {
  setup() {
    useHead({
      title: "Tim van Daatselaar",
      description: "I'm Tim, a Dutch Frontend Developer. I work at and am specialized in coding templates with TailwindCSS and Vue.js."
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-dvh items-center py-20 px-8" }, _attrs))}><div class="mx-auto w-full max-w-5xl"><div class="max-w-2xl"><p class="text-3xl font-semibold leading-snug lg:text-5xl lg:leading-snug"> I&#39;m Tim, a Dutch Frontend Developer. I work at <a href="https://gravity.nl" target="_blank" class="text-blue-500 underline hover:no-underline">Gravity</a> and am specialized in <a href="https://tailwindcss.com/" target="_blank" class="text-blue-500 underline hover:no-underline">Tailwind CSS</a> and <a href="https://vuejs.org/" target="_blank" class="text-blue-500 underline hover:no-underline">Vue.js</a>. </p><div class="mt-10 flex items-center gap-3"><figure class="relative h-8 w-8 overflow-hidden rounded-full bg-gray-200"><img class="absolute top-0 left-0 h-full w-full object-cover" src="https://github.com/timvandaatselaar.png" alt="Tim van Daatselaar"></figure><h1 class="text-lg font-semibold">Tim van Daatselaar</h1></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index.5b95b6a5.js.map
