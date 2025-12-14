<script setup>
import DarkModeComponent from '@/components/DarkModeComponent.vue'
import IconLogoPortfolio from '@/components/icons/IconLogoPortfolio.vue'
</script>

<template>
  <nav class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <a href="#" class="flex shrink-0 items-center gap-2">
        <IconLogoPortfolio />
        <span class="text-xl font-bold text-app-heading">Simone Maccario</span>
      </a>
      <div
        class="hidden sm:flex sm:items-center sm:gap-6 lg:absolute lg:start-1/2 lg:top-1/2 lg:-translate-1/2"
      >
        <a href="#about" class="px-3 py-2 font-medium text-app-text hover:text-app-heading"
          >About</a
        >
        <a href="#skills" class="px-3 py-2 font-medium text-app-text hover:text-app-heading"
          >Skills</a
        >
        <a href="#projects" class="px-3 py-2 font-medium text-app-text hover:text-app-heading"
          >Projects</a
        >
        <a href="#contact" class="px-3 py-2 font-medium text-app-text hover:text-app-heading"
          >Contact</a
        >
      </div>
      <div>
        <DarkModeComponent />
      </div>
    </div>
  </nav>
</template>
