<script setup></script>

<template>
  <section class="flex min-h-dvh flex-col items-center justify-center gap-4">
    <h1 class="text-4xl font-bold md:text-7xl" v-motion-slide-visible-once-bottom :delay="200">
      Hi, I'm <span class="text-app-accent">Simone</span>
    </h1>
    <p
      class="max-w-2xl px-4 text-justify text-xl text-app-text sm:my-4 sm:text-2xl md:text-center"
      v-motion-slide-visible-once-bottom
      :delay="400"
    >
      An aspiring Full-Stack Developer and Computer Science student, passionate about building clean
      and functional web applications.
    </p>
    <div
      class="flex w-full items-center justify-between gap-4 sm:w-100 sm:min-w-min"
      v-motion-slide-visible-once-bottom
      :delay="600"
    >
      <a
        href="#contact"
        class="flex max-h-15 w-1/2 items-center justify-center rounded-lg bg-app-accent py-3 text-app-heading shadow-lg hover:bg-app-accent-hover sm:px-6 sm:text-xl"
        >Get in Touch</a
      >
      <a
        href="#projects"
        class="flex max-h-15 w-1/2 items-center justify-center rounded-lg bg-app-card py-3 text-app-heading shadow-lg hover:bg-app-hover sm:px-6 sm:text-xl"
        >View My Work</a
      >
    </div>
  </section>
</template>
