<script setup></script>
<template>
  <div
    class="bg-gray-100 rounded-b-xl p-2 text-center font-bold mb-2 md:max-w-3xl mx-auto"
  >
    <div>
      <router-link to="/" class="font-extrabold text-3xl">
        Insurence <span class="text-blue-600">Rate</span>
      </router-link>
      <p>Version 1.00 Beta</p>
    </div>
    <!-- Navigation Link -->
    <nav class="flex justify-center text-gray-600">
      <router-link
        class="px-2 hover:underline hover:text-blue-600 focus:outline-none"
        exact-active-class="font-extrabold text-blue-600 underline"
        to="/"
        >Marine</router-link
      >
      <router-link
        class="px-2 hover:underline hover:text-blue-600 focus:outline-none"
        to="/fire"
        active-class="font-extrabold text-blue-600 underline"
        >Fire</router-link
      >
      <router-link
        class="px-2 hover:underline hover:text-blue-600 focus:outline-none"
        to="/car"
        active-class="font-extrabold text-blue-600 underline"
        >Car</router-link
      >
      <router-link
        class="px-2 hover:underline hover:text-blue-600 focus:outline-none"
        to="/about"
        active-class="font-extrabold text-blue-600 underline"
        >About</router-link
      >
    </nav>
  </div>
</template>
