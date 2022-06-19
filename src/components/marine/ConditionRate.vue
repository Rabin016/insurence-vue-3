<script setup>
import { ref, watch } from 'vue';
import BaseSelect from '../forms/BaseSelect.vue';
import { shipOptions, truckOptions, airOptions } from "./marineRates";
import BaseInput from "../forms/BaseInput.vue";

const via = ref('ship')
const rateName = ref('')
const childRate = ref('')
const emit = defineEmits(['changerate'])

watch(rateName, () => {
    const arr = [...shipOptions, ...truckOptions, ...airOptions]
    arr.filter(op => op.slug === rateName.value ? childRate.value = op.rate : null)
    emit('changerate', { rate: childRate.value, via: via.value })
})
</script>
<template>
    <div>
        <!-- via -->
        <div>
            <label for="ship">Via Ship</label>
            <input type="radio" value="ship" v-model="via">
            <label for="truck">Via Truck</label>
            <input type="radio" value="truck" v-model="via">
            <label for="truck">Via Air</label>
            <input type="radio" value="air" v-model="via">
        </div>
        <!-- Rate -->
        <div>
            <BaseSelect v-model="rateName" :options="via == 'ship' ? shipOptions : via == 'truck' ? truckOptions : airOptions" />
            <BaseInput v-model="childRate" type="text" @input="emit('changerate', childRate)" />
        </div>
        <div>
        </div>
    </div>
</template>

