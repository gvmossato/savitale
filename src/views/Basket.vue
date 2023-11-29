<template>
  <CheckoutStepper v-if="!submit" @submit="handleSubmit" />
  <SubmitAnimation v-else />
</template>

<script lang="ts">
import CheckoutStepper from "@/components/basket/CheckoutStepper.vue";
import SubmitAnimation from "@/components/basket/SubmitAnimation.vue";
import { useStore } from "vuex";

export default {
  components: {
    CheckoutStepper,
    SubmitAnimation,
  },

  setup() {
    const store = useStore();
    return { store };
  },

  data() {
    return {
      submit: false,
    };
  },

  methods: {
    handleSubmit() {
      console.log("submit");
      this.submit = true;

      // Duration of fake confirm dialog
      setTimeout(() => {
        this.store.commit("clearBasket");
        this.$router.push("/store");
        this.submit = false;
      }, 5000);
    },
  },
};
</script>
