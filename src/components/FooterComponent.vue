<script setup>
import { Copyright } from 'lucide-vue-next'
import LinkedinComponent from '@/components/LinkedinComponent.vue'
import GitHubComponent from '@/components/GitHubComponent.vue'
</script>

<template>
  <footer class="mt-20 border-t border-t-app-card">
    <div
      class="mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8"
    >
      <p
        class="flex items-center justify-center gap-2 text-sm text-app-text"
        v-motion-slide-visible-once-bottom
        :delay="200"
      >
        <Copyright /> 2025 Simone Maccario. All rights reserved.
      </p>
      <div class="flex gap-6">
        <GitHubComponent v-motion-slide-visible-once-bottom :delay="300" />
        <LinkedinComponent v-motion-slide-visible-once-bottom :delay="400" />
      </div>
    </div>
  </footer>
</template>
