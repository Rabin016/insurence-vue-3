<script setup>
import { ref } from "vue";
import BaseInput from "../../components/forms/BaseInput.vue";
import Button from "../../components/forms/Button.vue";
import ConditionRate from "../../components/marine/ConditionRate.vue";
import {
  convertCurrency,
  bankCalculate,
  rateCalculate,
} from "../../components/calculation/calculate";
import BaseCheckbox from "../../components/forms/BaseCheckbox.vue";

// All States
const limitAmount = ref("");
const bankPercent = ref(10);
const currencyRate = ref("");
const rate = ref(null);
const war = ref(true);
const via = ref("ship");
const premium = ref({
  net: 0,
  vat: 0,
  stamp: 0,
  total: 0,
});

// All Functions
const ratefn = (val) => {
  rate.value = val.rate;
  via.value = val.via;
};

const vatBalance = (total) => total * (15 / 100);

const submitInfo = () => {
  let val = convertCurrency(limitAmount.value, currencyRate.value);
  val = bankCalculate(val, bankPercent.value);
  const marineBalance = rateCalculate(val, rate.value);

  // Net Premium
  if (war.value) {
    premium.value.net = marineBalance + rateCalculate(val, 0.05);
  } else {
    premium.value.net = marineBalance;
  }
  premium.value.net <= 500 ? (premium.value.net = 500) : null;

  // vat
  premium.value.vat = vatBalance(premium.value.net);

  // Stamp
  if (via.value == "ship") {
    premium.value.stamp = val / 1500;
  } else {
    premium.value.stamp = 50;
  }

  // Total
  premium.value.total =
    premium.value.net + premium.value.vat + premium.value.stamp;
};
const emit = defineEmits(["premiumEmit"]);
emit("premiumEmit", premium.value);
</script>

<template>
  <div>
    <form class="body-layout font-bold" @submit.prevent="submitInfo">
      <div>
        <BaseInput v-model="limitAmount" label="Limit Amount" type="number" />
        <BaseInput v-model="bankPercent" label="Bank Percent" type="number" />
        <BaseInput v-model="currencyRate" label="Currency Rate" type="text" />

        <div>
          <!-- Condition -->
          <ConditionRate @changerate="ratefn" />

          <BaseCheckbox v-model="war" label="war" />
        </div>
      </div>
      <Button>Submit</Button>
    </form>
  </div>
</template>
