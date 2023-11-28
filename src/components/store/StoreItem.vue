<template>
  <v-card class="text-center pa-4" hover>
    <v-img :src="`./src/assets/store/items/${item.picture}`" height="200px">
      <v-overlay
        v-if="itemQuantity"
        v-model="itemQuantity"
        class="justify-center align-center"
        contained
      >
        <h2 class="text-white">Subtotal</h2>
        <h3 class="text-white">{{ item.weight * itemQuantity }} g</h3>
        <h3 class="text-white">R$ {{ (item.price * itemQuantity).toFixed(2) }}</h3>
      </v-overlay>
    </v-img>

    <v-card-title>{{ item.name }}</v-card-title>
    <v-card-subtitle class="text-subtitle-1">
      {{ item.weight }} g
    </v-card-subtitle>

    <v-card-text class="text-h6"> R$ {{ item.price }} </v-card-text>

    <v-card-actions class="d-flex justify-center">
      <div v-if="isInCart">
        <v-btn
          icon="mdi-minus-box"
          color="red"
          class="ma-0"
          @click="updateQuantity(item.name, 'sub')"
        />
        <span class="ma-0">{{ itemQuantity }}</span>
        <v-btn
          icon="mdi-plus-box"
          color="green"
          class="ma-0"
          @click="updateQuantity(item.name, 'add')"
        />
      </div>

      <v-btn
        v-else
        variant="flat"
        color="primary"
        class="pl-4 mb-3"
        prepend-icon="mdi-basket-plus"
        @click="updateQuantity(item.name, 'add')"
      >
        Adicionar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { Item } from "@/store";

export default {
  name: "StoreItem",

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();

    const isInCart = computed(
      () =>
        !!store.state.cart.find((item: Item) => item.name === props.item.name)
    );

    const itemQuantity = computed(
      () =>
        store.state.cart.find((item: Item) => item.name === props.item.name)
          ?.quantity ?? 0
    );

    const updateQuantity = (itemName: string, operation: "add" | "sub") => {
      operation === "add"
        ? store.commit("addToCart", props.item)
        : store.commit("removeFromCart", itemName);
    };

    return {
      isInCart,
      itemQuantity,
      updateQuantity,
    };
  },
};
</script>

<style lang="scss" scoped>
.v-overlay {
  background: rgba(0, 0, 0, 0.6);
}
</style>
