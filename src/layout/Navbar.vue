<script setup></script>
<template>
  <div class="bg-gray-200 rounded-b-xl p-2 text-center mb-2">
    <div>
      <router-link to="/" class="font-extrabold text-3xl">
        Insurence <span class="text-blue-600">Rate</span>
      </router-link>
    </div>
    <!-- Navigation Link -->
    <nav class="flex justify-center">
      <router-link
        class="px-2 hover:underline hover:text-blue-600 font-semibold"
        exact-active-class="font-extrabold text-blue-600 underline"
        ex
        to="/"
        >Marine</router-link
      >
      <router-link
        class="px-2 hover:underline hover:text-blue-600 font-semibold"
        to="/fire"
        active-class="font-bold text-blue-600 underline"
        >Fire</router-link
      >
      <router-link
        class="px-2 hover:underline hover:text-blue-600 font-semibold"
        to="/car"
        active-class="font-bold text-blue-600 underline"
        >Car</router-link
      >
      <router-link
        class="px-2 hover:underline hover:text-blue-600 font-semibold"
        to="/about"
        active-class="font-bold text-blue-600 underline"
        >About</router-link
      >
    </nav>
  </div>
</template>
