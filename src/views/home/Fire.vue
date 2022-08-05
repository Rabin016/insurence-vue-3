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
    } else if (structure.itemAmount >= 100 && bankPercent.value !== 0) {
      structurePrice = bankCalculate(structure.itemAmount, bankPercent.value);
    }
    netPremium = netPremium + rateCalculate(structurePrice, structure.rate);
  });
  rsd.value && (netPremium = netPremium + rateCalculate(amount, 0.13));
  const vat = rateCalculate(netPremium, 15);
  const total = netPremium + vat;
  premium.value.net = netPremium;
  premium.value.vat = vat;
  premium.value.total = total;
};

const emit = defineEmits(["premiumEmit"]);
emit("premiumEmit", premium.value);
</script>

<template>
  <div class="p-2">
    <form @submit.prevent="calculate">
      <BaseInput
        v-model.number="limitAmount"
        label="Limit Amount"
        type="number"
        placeholder="e.g: 2000000"
      />
      <BaseInput
        v-model.number="bankPercent"
        label="Bank Percent"
        type="number"
        placeholder="e.g: 10 or 20"
      />
      <ConditionRate @changeConditionData="cngConditionData" />

      <div>
        <BaseCheckbox label="RSD" v-model="rsd" />
      </div>
      <Button>Submit</Button>
    </form>
  </div>
</template>
