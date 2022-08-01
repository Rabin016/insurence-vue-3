<script setup>
import { RouterView } from "vue-router";
import Navbar from "./layout/Navbar.vue";
</script>

<template>
  <div
    class="bg-gradient-to-r from-rose-500 via-red-400 to-red-500 h-screen font-nunito px-3 capitalize font-semibold text-gray-800"
  >
    <header>
      <Navbar />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
