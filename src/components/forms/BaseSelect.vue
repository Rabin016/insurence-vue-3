<script setup>
const { modelValue, options } = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
  },
});
</script>
<template>
  <select
    class="bg-gray-300 rounded-lg p-2 focus:bg-gray-50 mb-2"
    :value="modelValue"
    v-bind="$attrs"
    @change="$emit('update:modelValue', $event.target.selectedOptions[0].value)"
  >
    <option disabled>Select one</option>
    <option v-for="(option, key) in options" :key="key" :value="option.slug">
      {{ option.name }}
    </option>
  </select>
</template>
