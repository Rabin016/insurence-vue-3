<script setup>
import { ref } from "vue";
import BaseInput from "../../components/forms/BaseInput.vue";
import ConditionRate from "../../components/fire/ConditionRate.vue";
import BaseCheckbox from "../../components/forms/BaseCheckbox.vue";
import Button from "../../components/forms/Button.vue";
import {
  bankCalculate,
  rateCalculate,
} from "../../components/calculation/calculate";
import PremiumStatus from "../../components/PremiumStatus.vue";

const limitAmount = ref("");
const bankPercent = ref(10);
const allConditions = ref();
const rsd = ref(false);
const premium = ref({
  net: 0,
  vat: 0,
  total: 0,
});

const cngConditionData = (data) => (allConditions.value = data);
const calculate = () => {
  const amount = bankCalculate(
    Number(limitAmount.value),
    Number(bankPercent.value)
  );
  let netPremium = 0;
  allConditions.value.forEach((structure) => {
    let structurePrice = structure.itemAmount;
    if (structure.itemAmount <= 100) {
      structurePrice = rateCalculate(amount, structure.itemAmount);
    }
    netPremium = netPremium + rateCalculate(structurePrice, structure.rate);
  });
  rsd.value && (netPremium = netPremium + rateCalculate(amount, 0.13));
  const vat = rateCalculate(netPremium, 15);
  const total = netPremium + vat;
  premium.value.net = netPremium;
  premium.value.vat = vat;
  premium.value.total = total;
  console.log(premium.value);
};
</script>

<template>
  <div>
    <p>Fire</p>
    <form @submit.prevent="calculate">
      <BaseInput v-model="limitAmount" label="Limit Amount" type="number" />
      <BaseInput v-model="bankPercent" label="Bank Percent" type="number" />
      <ConditionRate @changeConditionData="cngConditionData" />

      <div>
        <BaseCheckbox label="RSD" v-model="rsd" />
      </div>
      <Button>submit</Button>
    </form>
    <PremiumStatus :premiumBill="premium" />
  </div>
</template>
