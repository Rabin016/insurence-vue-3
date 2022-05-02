<script setup>
import { RouterView } from 'vue-router'
import Navbar from "./layout/Navbar.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

