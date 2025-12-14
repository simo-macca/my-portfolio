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
    class="h-full min-w-0 rounded-lg bg-app-card p-6 inset-shadow-sm inset-shadow-app-accent-subtle hover:inset-shadow-app-accent-hover"
    v-motion-slide-visible-once-left
    :delay="index * 200"
  >
    <a
      :href="method.link"
      target="_blank"
      rel="noopener noreferrer"
      class="group flex h-full items-start gap-4"
    >
      <component
        :is="method.icon"
        class="h-6 w-6 shrink-0 text-app-text group-hover:text-app-accent-hover"
      />
      <div class="min-w-0 flex-1">
        <div class="mb-2 flex items-center gap-2">
          <h3 class="line-clamp-1 font-semibold text-app-heading group-hover:text-app-accent-hover">
            {{ method.title }}
          </h3>
          <ExternalLink class="h-4 w-4 text-app-text group-hover:text-app-accent-hover" />
        </div>
        <p class="mb-1 truncate text-sm text-app-text">{{ method.value }}</p>
        <p class="text-xs text-app-muted">{{ method.description }}</p>
      </div>
    </a>
  </div>
</template>
