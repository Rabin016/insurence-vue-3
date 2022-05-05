<script setup>
const { label, modelValue } = defineProps({
	label: {
		type: String,
		default: ''
	},
	modelValue: {
		type: [Boolean],
		default: true
	}
})
</script>
<template>
	<div>
		<label v-if="label">{{ label }}</label>
		<input :placeholder="label" :value="modelValue" @input="$emit('update:modelValue', $event.target.checked)"
			type="checkbox">
	</div>
</template>
