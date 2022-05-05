<script setup>
import { RouterView } from "vue-router";

</script>
<template>
    <div>
        <h1>{{ $route.name }}</h1>
        <RouterView />
    </div>
</template>
