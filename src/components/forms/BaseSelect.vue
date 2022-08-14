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
  <div class="pb-2">
    <select
      class="bg-gray-200 rounded-lg p-2 focus:bg-gray-50 mb-2"
      :value="modelValue"
      v-bind="$attrs"
      @change="
        $emit('update:modelValue', $event.target.selectedOptions[0].value)
      "
    >
      <option selected disabled>Select one</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.slug"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>
