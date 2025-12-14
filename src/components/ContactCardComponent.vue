<script setup>
import { ExternalLink } from 'lucide-vue-next'

const props = defineProps({
  methods: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div
    v-for="(method, index) in props.methods"
    :key="index"
    class="h-full min-w-0 rounded-lg bg-gray-800 p-6 inset-shadow-sm inset-shadow-cyan-200 hover:inset-shadow-cyan-900"
  >
    <a
      :href="method.link"
      target="_blank"
      rel="noopener noreferrer"
      class="group flex h-full items-start gap-4"
    >
      <component
        :is="method.icon"
        class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-cyan-600"
      />
      <div class="min-w-0 flex-1">
        <div class="mb-2 flex items-center gap-2">
          <h3 class="font-semibold text-white group-hover:text-cyan-600">
            {{ method.title }}
          </h3>
          <ExternalLink class="h-4 w-4 text-gray-400 group-hover:text-cyan-600" />
        </div>
        <p class="mb-1 truncate text-sm text-gray-400">{{ method.value }}</p>
        <p class="text-xs text-gray-500">{{ method.description }}</p>
      </div>
    </a>
  </div>
</template>
