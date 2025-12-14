<script setup>
import { Rocket } from 'lucide-vue-next'
</script>

<template>
  <section id="projects" class="flex min-h-dvh flex-col items-center justify-center px-4 py-20">
    <div class="max-w-3xl text-center">
      <div class="relative mb-8 flex justify-center" v-motion-pop-visible-once>
        <Rocket class="relative z-10 h-16 w-16 text-app-accent" />
        <div class="absolute -inset-4 animate-pulse rounded-full bg-app-accent/20 blur-xl"></div>
      </div>

      <h2
        class="mb-6 text-4xl font-extrabold tracking-tight text-app-heading sm:text-5xl"
        v-motion-fade-visible-once
        :delay="200"
      >
        Projects
      </h2>

      <div class="space-y-6" v-motion-fade-visible-once :delay="400">
        <p class="text-xl text-app-text sm:text-2xl">
          I'm currently <span class="font-medium text-app-accent-text">engineering</span> new
          personal projects that I can't wait to share.
        </p>

        <div class="mx-auto mt-10 max-w-xs">
          <div class="h-1.5 w-full overflow-hidden rounded-full bg-app-card">
            <div
              class="h-full w-2/3 animate-pulse rounded-full bg-linear-to-r from-app-accent-hover to-blue-500"
            ></div>
          </div>
          <p class="mt-3 text-sm font-medium tracking-widest text-app-muted uppercase">
            Development in progress
          </p>
        </div>

        <p class="pt-6 text-lg text-app-muted italic">Stay tuned for the official launch.</p>
      </div>
    </div>
  </section>
</template>
