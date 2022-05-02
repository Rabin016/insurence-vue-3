<script setup>
import { ref } from 'vue';
import BaseInput from '../../components/BaseInput.vue';
import Button from '../../components/forms/Button.vue';
import ConditionRate from '../../components/marine/ConditionRate.vue';

const limitAmount = ref('')
const bankPercent = ref('')
const currencyRate = ref('')
const via = ref('ship')
const rate = ref(null)
const war = ref(false)

const rateChange = (r) => {
    rate.value = r
}

</script>

<template>
    <div>
        <p>Marine</p>
        <form>
            <div>
                <BaseInput v-model="limitAmount" label="Limit Amount" type="text" />
                <BaseInput v-model="bankPercent" label="Bank Percent" type="text" />
                <BaseInput v-model="currencyRate" label="Currency Rate" type="text" />

                <div>
                    <label>Ship</label>
                    <input v-model="via" type="radio" value="ship">
                    <label>Truck</label>
                    <input v-model="via" type="radio" value="truck">

                    <div>
                        <!-- Condition -->
                        <ConditionRate :viaCondition="via" @preRate="rateChange" />
                    </div>

                    <label>War</label>
                    <input type="checkbox" v-model="war" label="war" />
                </div>
            </div>
            <Button>Submit</Button>
        </form>
    </div>
</template>
