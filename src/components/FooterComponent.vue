<script setup>
import { Copyright, Github, Linkedin } from 'lucide-vue-next'
</script>

<template>
  <footer class="mt-20 border-t border-t-gray-800">
    <div
      class="mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8"
    >
      <p class="flex items-center justify-center gap-2 text-sm text-gray-400">
        <Copyright /> 2025 Simone Maccario. All rights reserved.
      </p>
      <div class="flex gap-6">
        <a
          href="https://github.com/simo-macca"
          target="_blank"
          class="text-gray-400 transition-colors hover:text-cyan-600"
        >
          <span class="sr-only">GitHub</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.09 2.91.83.091-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.64-.33 2.5-.33.86 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.33 4.68-4.56 4.93.43.37.82 1.1.82 2.22 0 1.6-.01 2.89-.01 3.28 0 .27.18.58.69.48C21.137 20.165 24 16.418 24 12c0-5.523-4.477-10-10-10z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/simone-maccario-70a339362/"
          target="_blank"
          class="text-gray-400 transition-colors hover:text-cyan-600"
        >
          <span class="sr-only">LinkedIn</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.698h-3v-11h2.889v1.316h.04c.4-.758 1.379-1.54 2.849-1.54 3.049 0 3.611 1.996 3.611 4.59v6.634z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>
