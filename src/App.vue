<script setup>
import { RouterView } from "vue-router";
import Navbar from "./layout/Navbar.vue";
</script>

<template>
  <div
    class="font-bold bg-gradient-to-r from-rose-500 via-red-400 to-red-500 h-full pb-4 font-nunito px-3 capitalize text-gray-800 text-sm"
  >
    <header>
      <Navbar />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
