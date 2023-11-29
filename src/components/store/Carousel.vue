<template>
  <v-container>
    <v-carousel cycle hide-delimiters progress="primary" show-arrows="hover">
      <v-carousel-item cover v-for="(url, i) in carousel" :key="i" :src="url" />
    </v-carousel>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "Carousel",

  data: () => ({
    carousel: [
      "./src/assets/store/carousel/carousel1.png",
      "./src/assets/store/carousel/carousel2.jpg",
      "./src/assets/store/carousel/carousel3.jpg",
    ],
  }),
};
</script>
