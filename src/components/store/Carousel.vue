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
      "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    ],
  }),
};
</script>
