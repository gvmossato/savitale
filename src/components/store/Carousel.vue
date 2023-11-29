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
      "img/store/carousel/carousel1.png",
      "img/store/carousel/carousel2.jpg",
      "img/store/carousel/carousel3.jpg",
    ],
  }),
};
</script>
Y
