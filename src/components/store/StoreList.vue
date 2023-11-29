<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3" v-for="item in store" :key="item.name">
        <StoreItem :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import StoreItem from "@/components/store/StoreItem.vue";

export default {
  data: () => ({
    store: [
      {
        picture: "green-apple.png",
        name: "Maçã Verde",
        weight: 500,
        price: 19.99,
      },
      {
        picture: "pear.png",
        name: "Pêra",
        weight: 500,
        price: 19.99,
      },
      {
        picture: "strawberry.png",
        name: "Morango",
        weight: 500,
        price: 19.99,
      },
      {
        picture: "yellow-lemon.png",
        name: "Limão Siciliano",
        weight: 500,
        price: 19.99,
      },
    ],
  }),

  components: {
    StoreItem,
  },
};
</script>
