<template>
  <v-tooltip left text="Ver cesta">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        color="success"
        :class="`float-br ${basketAmount ? 'animate' : ''}`"
        icon="mdi-basket-check"
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
    const basketAmount = computed(() => store.getters.basketItemCount);
    return { basketAmount };
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
