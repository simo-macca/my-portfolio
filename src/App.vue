<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="w-full">
      <nav class="mx-auto flex w-full items-center justify-evenly p-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
