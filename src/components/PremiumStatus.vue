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

const formatNumber = (val) => {
  const round = Math.round(val)
  const numberWithCommas = round.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return numberWithCommas
}

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
  <div class="rounded-lg mt-2 p-2">
    <div>
      <h1>Premium</h1>
    </div>
    <div>
      <p>
        Net: <span class="text-red-600">{{ formatNumber(premiumBill.net) }}</span>
      </p>
      <p>
        Vat: <span class="text-red-600">{{ formatNumber(premiumBill.vat) }}</span>
      </p>
      <p v-if="premiumBill.stamp">
        Stamp: <span class="text-red-600">{{ formatNumber(premiumBill.stamp) }}</span>
      </p>
      <p>
        Total: <span class="text-red-600">{{ formatNumber(premiumBill.total) }}</span>
      </p>
    </div>
    <!-- Discount -->
    <div v-if="premiumBill.net">
      <BaseInput label="Discount" v-model="discount" type="number" />
      <Button @click="calculate">Discount Calculate</Button>
      <div>
        <p v-if="afterDiscount.commission">
          Discount Amount
          <span class="text-red-600">{{
          formatNumber(afterDiscount.commission)
          }}</span>
        </p>
        <p v-if="afterDiscount.cashAmount">
          Cash Payment
          <span class="text-red-600">{{
          formatNumber(afterDiscount.cashAmount)
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
