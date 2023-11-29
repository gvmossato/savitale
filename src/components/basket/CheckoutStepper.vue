<template>
  <v-container fluid class="d-flex align-center justify-center">
    <v-stepper
      alt-labels
      flat
      hide-actions
      bg-color="transparent"
      width="700"
      :items="steps"
      v-model="step"
    >
      <template v-slot:item.1>
        <BasketList @next-step="handleNext" />
      </template>

      <template v-slot:item.2>
        <DeliveryForm @next-step="handleNext" @prev-step="handlePrev" />
      </template>

      <template v-slot:item.3>
        <PaymentForm @next-step="handleNext" @prev-step="handlePrev" />
      </template>
    </v-stepper>
  </v-container>
</template>

<script lang="ts">
import BasketList from "./BasketList.vue";
import DeliveryForm from "./DeliveryForm.vue";
import PaymentForm from "./PaymentForm.vue";

export default {
  name: "CheckoutStepper",

  components: {
    BasketList,
    DeliveryForm,
    PaymentForm,
  },

  data() {
    return {
      step: 1,
      steps: ["Cesta", "Entrega", "Pagamento"],
    };
  },

  methods: {
    handleNext() {
      this.step === this.steps.length ? this.handleSubmit() : this.step++;
    },

    handlePrev() {
      this.step--;
    },

    handleSubmit() {
      this.$emit("submit");
      // Minimum delay to prevent user from seeing the reset
      setTimeout(() => {
        this.step = 1;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .v-stepper-header {
    box-shadow: none !important;
  }
}
</style>
