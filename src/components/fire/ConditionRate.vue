<script setup>
import { reactive, watch } from "vue";
import BaseSelect from "../forms/BaseSelect.vue";
import { classes, class1, class2, class3 } from "../fire/rates";
import BaseInput from "../forms/BaseInput.vue";
import { v4 as uuidv4 } from "uuid";
import Button from "../forms/Button.vue";

const conditionData = reactive([
  {
    _id: uuidv4(),
    selectedClass: "",
    selectedStructure: "",
    rate: 0,
    itemAmount: 100,
  },
]);

const emit = defineEmits(["changeConditionData"]);

watch(conditionData, () => emit("changeConditionData", conditionData));

const changeRate = (data) => {
  console.log(data);
  [...class1, ...class2, ...class3].forEach((r) => {
    if (r.slug == data.selectedStructure) {
      conditionData.forEach((b) => {
        if (b._id === data._id) {
          b.rate = r.rate;
        }
      });
    }
  });
};

const addNewEntries = () => {
  conditionData.push({
    _id: uuidv4(),
    selectedClass: "",
    selectedStructure: "",
    rate: 0,
  });
};
</script>
<template>
  <div>
    <div class="flex">
      <h3 class="mr-2">Add Occupation of premises:</h3>
      <Button @click="addNewEntries">add</Button>
    </div>
    <div v-for="(data, index) in conditionData" :key="index">
      <div>
        <h3>Constructure Class</h3>
        <BaseSelect v-model="data.selectedClass" :options="classes" />
      </div>

      <div>
        <h3>Constructure Name</h3>
        <BaseSelect
          v-model="data.selectedStructure"
          :options="
            data.selectedClass == 'class1'
              ? class1
              : data.selectedClass == 'class2'
              ? class2
              : class3
          "
          @change="changeRate(data)"
        />
      </div>

      <div>
        <BaseInput label="Rate" v-model="data.rate" />
        <BaseInput v-model="data.itemAmount" type="number" />
      </div>
    </div>
  </div>
</template>
