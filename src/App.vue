<script setup>
import AboutView from '@/views/AboutView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import HomeView from '@/views/HomeView.vue'
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-b-gray-800 bg-gray-900/80 backdrop-blur-md"
  >
    <NavbarComponent />
  </header>

  <main class="mx-auto px-4 sm:px-6 lg:px-8">
    <HomeView class="" />

    <AboutView id="about" />

    <SkillsView id="skills" />

    <ProjectsView id="projects" />

    <ContactView id="contact" />
  </main>

  <FooterComponent />
</template>
