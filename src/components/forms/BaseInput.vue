<script setup>
const { label, modelValue } = defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: "",
  },
});
</script>
<template>
  <div class="pb-1">
    <label v-if="label">{{ label }}</label>
    <input
      class="w-full p-2 rounded-lg bg-gray-200 focus:bg-gray-50 mb-2"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>
