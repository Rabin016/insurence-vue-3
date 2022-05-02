<script setup>
import { computed, ref, watch } from 'vue';
import { shipOptions, truckOptions } from '../marine/marineRates'

const rate = ref(0.30)
const marineRates = computed(() => props.viaCondition == 'ship' ? shipOptions : truckOptions)

const rateChange = (val) => {
	marineRates.value.filter(rat => {
		rat.slug === val ? rate.value = rat.rate : null
	})
}

watch(marineRates, val => rate.value = val[0].rate)

const props = defineProps({
	viaCondition: {
		type: String,
		default: ''
	}
})


</script>
<template>
	<div>
		<select @change="[rateChange($event.target.selectedOptions[0].value), $emit('preRate', rate)]">
			<option disabled>Please select one</option>
			<option v-for="(marineRate, index) in marineRates" :value="marineRate.slug" :key="index">{{ marineRate.name }}
			</option>
		</select>
		<input type="text" @input="$emit('preRate', rate)" v-model="rate" />
	</div>
</template>

