<script setup>
import { Rocket } from 'lucide-vue-next'
</script>

<template>
  <section
    id="projects"
    class="flex min-h-dvh flex-col items-center justify-start px-4 py-20 sm:justify-center"
  >
    <div class="max-w-3xl text-center">
      <div class="relative mb-8 flex justify-center">
        <Rocket class="relative z-10 h-16 w-16 text-cyan-500" />
        <div class="absolute -inset-4 animate-pulse rounded-full bg-cyan-500/20 blur-xl"></div>
      </div>

      <h2 class="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Projects</h2>

      <div class="space-y-6">
        <p class="text-xl text-gray-400 sm:text-2xl">
          I'm currently <span class="font-medium text-cyan-400">engineering</span> new personal
          projects that I can't wait to share.
        </p>

        <div class="mx-auto mt-10 max-w-xs">
          <div class="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
            <div
              class="h-full w-2/3 animate-pulse rounded-full bg-linear-to-r from-cyan-600 to-blue-500"
            ></div>
          </div>
          <p class="mt-3 text-sm font-medium tracking-widest text-gray-500 uppercase">
            Development in progress
          </p>
        </div>

        <p class="pt-6 text-lg text-gray-500 italic">Stay tuned for the official launch.</p>
      </div>
    </div>
  </section>
</template>
