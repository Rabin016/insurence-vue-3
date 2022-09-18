<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import PremiumStatus from "../../components/PremiumStatus.vue";
import Icons from "../../assets/icons.vue";

const premium = ref("");
const policyIcons = ref([
  {
    name: "Fire",
    slug: "fire",
    iconColor: "stroke-red-600",
    textColor: "text-red-600",
    color: "bg-red-600",
  },
  {
    name: "Marine",
    slug: "marine",
    iconColor: "stroke-blue-600",
    textColor: "text-blue-600",
    color: "bg-blue-600",
  },
  {
    name: "Car",
    slug: "car",
    iconColor: "stroke-green-600",
    textColor: "text-green-600",
    color: "bg-green-600",
  },
]);
const premiumEmitInfo = (data) => (premium.value = data);
</script>
<template>
  <div class="bg-gray-100 md:max-w-3xl mx-auto rounded-lg p-2 flex flex-col">
    <div v-for="policyIcon in policyIcons" :key="policyIcon.slug">
      <h3 class="flex items-center justify-center text-xl" :class="policyIcon.textColor"
        v-if="$route.name == policyIcon.slug">
        <Icons class="w-6 h-6 mr-1 stroke-2 stoke fill-blue-600" :class="policyIcon.iconColor"
          :name="policyIcon.slug" />{{ policyIcon.name }}
      </h3>
      <div v-if="$route.name == policyIcon.slug" :class="policyIcon.color" class="p-1 rounded-lg mx-auto w-6"></div>
    </div>
    <RouterView @premiumEmit="premiumEmitInfo" />
  </div>

  <PremiumStatus class="bg-gray-100 md:max-w-3xl mx-auto rounded-lg p-2 flex flex-col" v-if="premium.net"
    :premiumBill="premium" />
</template>
