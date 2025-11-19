<template>
  <div class="flex min-h-dvh items-center py-20 px-8">
    <div class="mx-auto w-full max-w-5xl">
      <div class="max-w-2xl">
        <p
          class="text-3xl font-semibold leading-snug lg:text-5xl lg:leading-snug"
        >
          I'm Tim, a Dutch Frontend Developer. I work at
          <a
            href="https://gravity.nl"
            target="_blank"
            class="text-blue-500 underline hover:no-underline"
            >Gravity</a
          >
          and am specialized in
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            class="text-blue-500 underline hover:no-underline"
            >Tailwind CSS</a
          >
          and
          <a
            href="https://vuejs.org/"
            target="_blank"
            class="text-blue-500 underline hover:no-underline"
            >Vue.js</a
          >.
        </p>
        <div class="mt-10">
          <h2 class="text-xl font-bold">Capitals</h2>
          <p class="mt-2 text-xl leading-relaxed text-gray-700">
            Currently, I’m working on
            <a
              href="https://fantasytips.nl"
              target="_blank"
              class="text-blue-500 underline hover:no-underline"
              >Fantasytips.nl</a
            >
            , a platform that provides tips and advice for fantasy football players in ESPN Fantasy Football and Fifa Fantasy WK 2026.
          </p>
        </div>

        <div class="mt-10 flex items-center gap-3">
          <figure
            class="relative h-8 w-8 overflow-hidden rounded-full bg-gray-200"
          >
            <img
              class="absolute top-0 left-0 h-full w-full object-cover"
              src="https://github.com/timvandaatselaar.png"
              alt="Tim van Daatselaar"
            />
          </figure>
          <h1 class="text-lg font-semibold">Tim van Daatselaar</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    useHead({
      title: "Tim van Daatselaar",
      description:
        "I'm Tim, a Dutch Frontend Developer. I work at and am specialized in coding templates with TailwindCSS and Vue.js.",
    });
  },
};
</script>
