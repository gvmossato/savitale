<template>
  <v-parallax
    src="https://images.unsplash.com/photo-1471248026681-35a45d5530a3"
    height="800px"
  >
    <div class="overlay">
      <img src="@/assets/logo.svg" alt="logo" width="600" />
      <h2 class="text-white mt-4">Resgatando sabores que nutrem o futuro</h2>
      <v-btn
        class="mt-8"
        color="primary"
        size="x-large"
        prepend-icon="mdi-shopping"
        to="/store"
      >
        Começar
      </v-btn>
    </div>
  </v-parallax>
</template>

<style lang="scss" scoped>
.overlay {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
