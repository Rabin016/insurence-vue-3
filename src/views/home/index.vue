<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import PremiumStatus from "../../components/PremiumStatus.vue";

const premium = ref("");
const premiumEmitInfo = (data) => (premium.value = data);
</script>
<template>
  <div class="bg-gray-200 rounded-lg p-2">
    <h3
      :class="
        $route.name == 'marine'
          ? 'text-blue-700'
          : $route.name == 'fire'
          ? 'text-red-700'
          : $route.name == 'car'
          ? 'text-green-700'
          : null
      "
      class="text-center text-xl"
    >
      {{ $route.name }}
    </h3>
    <RouterView @premiumEmit="premiumEmitInfo" />
  </div>

  <PremiumStatus v-if="premium.net" :premiumBill="premium" />
</template>
