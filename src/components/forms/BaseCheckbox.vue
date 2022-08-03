<script setup>
const { label, modelValue } = defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [Boolean],
    default: true,
  },
});
</script>
<template>
  <div class="pb-2">
    <input
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.checked)"
      type="checkbox"
    />
    <label class="pl-1" v-if="label">{{ label }}</label>
  </div>
</template>
