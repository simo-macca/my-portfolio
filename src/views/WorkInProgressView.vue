<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Coffee, Code, Sparkles, Rocket } from 'lucide-vue-next';

const dots = ref('');
const currentIcon = ref(0);

const icons = [
  { Icon: Coffee, color: 'text-amber-400' },
  { Icon: Code, color: 'text-green-400' },
  { Icon: Sparkles, color: 'text-purple-400' },
  { Icon: Rocket, color: 'text-blue-400' }
];

const activeIconData = computed(() => {
  return icons[currentIcon.value];
});

let dotsInterval = null;
let iconInterval = null;

onMounted(() => {
  dotsInterval = setInterval(() => {
    dots.value = dots.value.length >= 3 ? '' : dots.value + '.';
  }, 500);

  iconInterval = setInterval(() => {
    currentIcon.value = (currentIcon.value + 1) % icons.length;
  }, 2000);
});

onUnmounted(() => {
  clearInterval(dotsInterval);
  clearInterval(iconInterval);
});
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 overflow-hidden relative">
    <div class="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
    <div class="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

    <div class="relative z-10 text-center w-max mx-auto">
      <div class="m-8 flex justify-center">
        <div class="relative">
          <component
            :is="activeIconData.Icon"
            :class="['w-24', 'h-24', activeIconData.color, 'transition-all', 'duration-500', 'transform', 'hover:scale-110']"
            :stroke-width="1.5"
          />
          <div class="absolute -inset-4 bg-linear-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
        </div>
      </div>

      <h1 class="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
        <span class="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
          Coming Soon
        </span>
      </h1>

      <div class="text-xl md:text-2xl text-gray-300 mb-8 font-light h-8">
        Crafting something awesome{{ dots }}
      </div>

      <div class="flex flex-wrap gap-3 justify-center mb-8">
        <span class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-200 border border-white/20">
          ✨ Designing
        </span>
        <span class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-200 border border-white/20">
          🚀 Building
        </span>
        <span class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-200 border border-white/20">
          ☕ Caffeinating
        </span>
      </div>

      <p class="text-gray-400 text-lg mb-8 max-w-md mx-auto">
        My portfolio is currently in the digital oven.
        It'll be worth the wait, I promise! 🎨
      </p>

      <div class="max-w-md mx-auto">
        <div class="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
          <div class="h-full bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-pulse w-1/12"></div>
        </div>
        <p class="text-gray-500 text-sm mt-2">Approximately 8% done (probably)</p>
      </div>

      <div class="mt-12 text-gray-500 text-sm">
        <p>Meanwhile, why don't you grab a coffee? ☕</p>
      </div>
    </div>
  </div>
</template>
