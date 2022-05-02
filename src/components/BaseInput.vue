<script setup>
const { label, modelValue } = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number, Boolean],
        default: null
    }
})
</script>
<template>
    <div>
        <label>{{ label }}</label>
        <input type="text" :placeholder="`Entre ${label}`" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value || $event.target.checked)" v-bind="$attrs">
    </div>
</template>
