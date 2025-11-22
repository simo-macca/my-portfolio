<script setup></script>

<template>
  <section class="flex min-h-dvh flex-col items-center justify-center gap-4">
    <h2 class="mb-12 text-center text-4xl font-bold">About me</h2>
    <div class="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-3">
      <div class="flex h-full items-center justify-center md:col-span-1">
        <img
          src="../components/icons/my_profile.jpg"
          alt="photo profile"
          class="h-60 w-60 rounded-full border-4 border-cyan-500 bg-gray-800 object-cover shadow-xl"
        />
      </div>
      <div class="flex flex-col gap-y-3 px-3 text-justify text-gray-400 md:col-span-2 md:mr-20">
        <p>
          Hello! I'm a final-year Computer Science student at [Your University]. My journey in tech
          started with a curiosity for how things work, and it's evolved into a passion for
          developing solutions that are both smart and easy to use.
        </p>
        <p>
          As a developer, I enjoy the full spectrum of development, from designing intuitive user
          interfaces with <strong class="text-gray-100">Vue.js and Tailwind</strong> (like this
          site!) to engineering robust back-end systems with Node.js.
        </p>
        <p>
          I'm currently looking for my first professional role where I can contribute my skills,
          learn from experienced mentors, and help build amazing products.
        </p>
      </div>
    </div>
  </section>
</template>
