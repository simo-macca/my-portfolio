<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Coffee, Code, Sparkles, Rocket } from 'lucide-vue-next'

const dots = ref('')
const currentIcon = ref(0)

const icons = [
  { Icon: Coffee, color: 'text-amber-400' },
  { Icon: Code, color: 'text-green-400' },
  { Icon: Sparkles, color: 'text-purple-400' },
  { Icon: Rocket, color: 'text-blue-400' },
]

const activeIconData = computed(() => {
  return icons[currentIcon.value]
})

let dotsInterval = null
let iconInterval = null

onMounted(() => {
  dotsInterval = setInterval(() => {
    dots.value = dots.value.length >= 3 ? '' : dots.value + '.'
  }, 500)

  iconInterval = setInterval(() => {
    currentIcon.value = (currentIcon.value + 1) % icons.length
  }, 2000)
})

onUnmounted(() => {
  clearInterval(dotsInterval)
  clearInterval(iconInterval)
})
</script>

<template>
  <div
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-4"
  >
    <div
      class="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-xl filter"
    ></div>
    <div
      class="absolute right-20 bottom-20 h-72 w-72 animate-pulse rounded-full bg-pink-500 opacity-20 mix-blend-multiply blur-xl filter delay-700"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 h-72 w-72 animate-pulse rounded-full bg-blue-500 opacity-20 mix-blend-multiply blur-xl filter delay-1000"
    ></div>

    <div class="relative z-10 mx-auto w-max text-center">
      <div class="m-8 flex justify-center">
        <div class="relative">
          <component
            :is="activeIconData.Icon"
            :class="[
              'w-24',
              'h-24',
              activeIconData.color,
              'transition-all',
              'duration-500',
              'transform',
              'hover:scale-110',
            ]"
            :stroke-width="1.5"
          />
          <div
            class="absolute -inset-4 animate-pulse rounded-full bg-linear-to-r from-purple-600 to-pink-600 opacity-30 blur-2xl"
          ></div>
        </div>
      </div>

      <h1 class="mb-4 text-6xl font-bold tracking-tight text-white md:text-7xl">
        <span
          class="animate-pulse bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
        >
          Coming Soon
        </span>
      </h1>

      <div class="mb-8 h-8 text-xl font-light text-gray-300 md:text-2xl">
        Crafting something awesome{{ dots }}
      </div>

      <div class="mb-8 flex flex-wrap justify-center gap-3">
        <span
          class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-gray-200 backdrop-blur-sm"
        >
          ✨ Designing
        </span>
        <span
          class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-gray-200 backdrop-blur-sm"
        >
          🚀 Building
        </span>
        <span
          class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-gray-200 backdrop-blur-sm"
        >
          ☕ Caffeinating
        </span>
      </div>

      <p class="mx-auto mb-8 max-w-md text-lg text-gray-400">
        My portfolio is currently in the digital oven. It'll be worth the wait, I promise! 🎨
      </p>

      <div class="mx-auto max-w-md">
        <div class="h-2 overflow-hidden rounded-full bg-white/10 backdrop-blur-sm">
          <div
            class="h-full w-3/5 animate-pulse rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-blue-500"
          ></div>
        </div>
        <p class="mt-2 text-sm text-gray-500">Approximately 60% done (probably)</p>
      </div>

      <div class="mt-12 text-sm text-gray-500">
        <p>Meanwhile, why don't you grab a coffee? ☕</p>
      </div>
    </div>
  </div>
</template>
