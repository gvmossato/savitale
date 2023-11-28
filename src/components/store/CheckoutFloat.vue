<template>
  <v-tooltip left text="Finalizar compra!">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        color="green"
        :class="`float-br ${cartAmount ? 'animate' : ''}`"
        icon="mdi-check"
        to="/basket"
      />
    </template>
  </v-tooltip>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "CheckoutFloat",

  setup() {
    const store = useStore();
    const cartAmount = computed(() => store.getters.cartItemCount);
    return { cartAmount };
  },
};
</script>

<style lang="scss" scoped>
.float-br {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1rem;
  transform: scale(0);
}

.animate {
  transform: scale(1) rotate(360deg);
}
</style>
