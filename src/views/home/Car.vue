<script setup>
import { ref } from "vue";
import BaseInput from "../../components/forms/BaseInput.vue";
import BaseCheckbox from "../../components/forms/BaseCheckbox.vue";
import Button from "../../components/forms/Button.vue";
import BaseSelect from "../../components/forms/BaseSelect.vue";
import {
  bankCalculate,
  rateCalculate,
} from "../../components/calculation/calculate";

const limitAmount = ref("");
const bankPercent = ref(10);
const rss = ref(false);
const selecetCC = ref("");
const totalPassenger = ref("");
const premium = ref({
  net: 0,
  vat: 0,
  total: 0,
});
const emit = defineEmits(["premiumEmit"]);

const ccCar = [
  { slug: "1500cc", name: "1500 CC", rate1: 250, rate2: 2873 },
  { slug: "1800cc", name: "1800 CC", rate1: 350, rate2: 2925 },
];

const calculate = () => {
  let val = bankCalculate(limitAmount.value, bankPercent.value);
  // RCC Calculate
  rss.value
    ? (val = rateCalculate(val, 2.15))
    : (val = rateCalculate(val, 1.65));
  // CC Calculate
  selecetCC.value == "1500cc"
    ? (val = val + 250 + 2873)
    : (val = val + 350 + 2925);
  // Passenger Calculate
  let passenger = (totalPassenger.value - 1) * 45;
  passenger = passenger + 30;
  // Final calculate
  val = val + passenger;
  const vat = rateCalculate(val, 15);
  const total = val + vat;
  // Premium
  premium.value.net = val;
  premium.value.vat = vat;
  premium.value.total = total;
};

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
      <BaseSelect v-model="selecetCC" :options="ccCar" />
      <BaseInput
        type="number"
        label="Total Passenger"
        v-model.number="totalPassenger"
        placeholder="Include Driver too"
      />

      <div>
        <BaseCheckbox label="RSS" v-model="rss" />
      </div>
      <Button>Submit</Button>
    </form>
  </div>
</template>
