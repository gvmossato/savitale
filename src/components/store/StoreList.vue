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
  components: {
    StoreItem,
  },

  data: () => ({
    store: [
      {
        picture: "green-apple.png",
        name: "Maçã Verde",
        weight: 500,
        price: 15.99,
      },
      {
        picture: "strawberry.png",
        name: "Morango",
        weight: 250,
        price: 11.25,
      },
      {
        picture: "pear.png",
        name: "Pêra",
        weight: 500,
        price: 5.85,
      },
      {
        picture: "yellow-lemon.png",
        name: "Limão Siciliano",
        weight: 250,
        price: 3.56,
      },
      {
        picture: "peach.png",
        name: "Pêssego",
        weight: 250,
        price: 3.81,
      },
      {
        picture: "apple.png",
        name: "Maçã",
        weight: 500,
        price: 7.61,
      },
      {
        picture: "banana.png",
        name: "Banana",
        weight: 500,
        price: 3.47,
      },
      {
        picture: "cherry.png",
        name: "Ameixa",
        weight: 250,
        price: 11.19,
      },
      {
        picture: "orange.png",
        name: "Laranja",
        weight: 500,
        price: 1.53,
      },
    ],
  }),
};
</script>
