<template>
  <v-card class="text-center pa-4" hover>
    <v-img :src="`./src/assets/store/items/${item.picture}`" height="200px">
      <v-overlay
        v-if="itemQuantity"
        v-model="showOverlay"
        class="justify-center align-center"
        contained
      >
        <h2 class="text-white">Subtotal</h2>
        <h3 class="text-white">{{ item.weight * itemQuantity }} g</h3>
        <h3 class="text-white">{{ formatMoney(item.price * itemQuantity) }}</h3>
      </v-overlay>
    </v-img>

    <v-card-title>{{ item.name }}</v-card-title>
    <v-card-subtitle class="text-subtitle-1">
      {{ item.weight }} g
    </v-card-subtitle>

    <v-card-text class="text-h6">{{ formatMoney(item.price) }}</v-card-text>

    <v-card-actions class="d-flex justify-center">
      <div v-if="isInBasket">
        <v-btn
          icon="mdi-minus-box"
          color="error"
          class="ma-0"
          @click="updateQuantity(item.name, 'sub')"
        />
        <span class="ma-0">{{ itemQuantity }}</span>
        <v-btn
          icon="mdi-plus-box"
          color="success"
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
import { Item } from "@/store";
import { computed } from "vue";
import { useStore } from "vuex";
import { formatMoney } from "@/utils/format/number";

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

    const isInBasket = computed(
      () =>
        !!store.state.basket.find((item: Item) => item.name === props.item.name)
    );

    const itemQuantity = computed(
      () =>
        store.state.basket.find((item: Item) => item.name === props.item.name)
          ?.quantity ?? 0
    );

    const updateQuantity = (itemName: string, operation: "add" | "sub") => {
      operation === "add"
        ? store.commit("addToBasket", props.item)
        : store.commit("removeFromBasket", itemName);
    };

    return {
      isInBasket,
      itemQuantity,
      updateQuantity,
    };
  },

  computed: {
    showOverlay() {
      return this.itemQuantity > 0;
    },
  },

  methods: {
    formatMoney,
  },
};
</script>

<style lang="scss" scoped>
.v-overlay {
  background: rgba(0, 0, 0, 0.6);
}
</style>
