<script setup>
import { ref } from "vue";
import { rateCalculate } from "./calculation/calculate";
import BaseInput from "./forms/BaseInput.vue";
import Button from "./forms/Button.vue";

const { premiumBill } = defineProps({
  premiumBill: {
    net: {
      type: Number,
      default: 0,
    },
    vat: {
      type: Number,
      default: 0,
    },
    stamp: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
});

const round = (data) => Math.round(data);

const discount = ref(40);
const afterDiscount = ref({
  cashAmount: 0,
  commission: 0,
});

const calculate = () => {
  afterDiscount.value.commission = rateCalculate(
    premiumBill.net,
    discount.value
  );
  afterDiscount.value.cashAmount =
    premiumBill.total - afterDiscount.value.commission;
};
</script>
<template>
  <div class="bg-gray-200 rounded-lg mt-2 p-2">
    <div>
      <h1>Premium</h1>
    </div>
    <div>
      <p>Net: {{ round(premiumBill.net) }}</p>
      <p>Vat: {{ round(premiumBill.vat) }}</p>
      <p v-if="premiumBill.stamp">Stamp: {{ round(premiumBill.stamp) }}</p>
      <p>Total: {{ round(premiumBill.total) }}</p>
    </div>
    <!-- Discount -->
    <div v-if="premiumBill.net">
      <BaseInput label="Discount" v-model="discount" type="number" />
      <Button @click="calculate">Discount Calculate</Button>
      <div>
        <p v-if="afterDiscount.commission">
          Discount Amount <span>{{ round(afterDiscount.commission) }}</span>
        </p>
        <p v-if="afterDiscount.cashAmount">
          Cash Payment <span>{{ round(afterDiscount.cashAmount) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
