<script setup>
const { premiumBill } = defineProps({
    premiumBill: {
        net: {
            type: Number,
            default: 0
        },
        vat: {
            type: Number,
            default: 0
        },
        stamp: {
            type: Number,
            default: 0
        },
        total: {
            type: Number,
            default: 0
        }
    }
})


</script>
<template>
    <div>
        <h1>Premium</h1>
    </div>
    <div>
        <p>Net: {{ premiumBill.net }}</p>
        <p>Vat: {{ premiumBill.vat }}</p>
        <p v-if="premiumBill.stamp">Stamp: {{ premiumBill.stamp }}</p>
        <p>Total: {{ premiumBill.total }}</p>
    </div>
</template>

