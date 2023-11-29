<template>
  <v-layout class="d-flex flex-column text-center">
    <img class="step" :src="`/img/steps/${picture}`" :alt="alt" />
    <h2 class="text-secondary ma-4">{{ title }}</h2>
    <p>{{ description }}</p>
  </v-layout>
</template>

<script lang="ts">
  export default {
    data: () => ({
      overlay: true,
    }),

    props: {
      picture: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    }
  }
</script>

<style lang="scss" scoped>
  .step {
    width: 100%;
    height: 100%;
    border-radius: 200px;
  }
</style>
