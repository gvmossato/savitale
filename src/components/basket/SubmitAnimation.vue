<template>
  <v-card class="dialog" v-if="!done">
    <v-progress-circular class="giant" color="grey" indeterminate />
    <v-card-title class="my-4 text-grey font-weight-bold">
      Aguarde...
    </v-card-title>
    <span> Pedido realizado! Espere enquanto confirmamos a compra. </span>
  </v-card>
  <v-card class="dialog" v-else>
    <v-icon class="giant" color="success"> mdi-check-circle </v-icon>
    <v-card-title class="my-4 text-success font-weight-bold">
      Sucesso!
    </v-card-title>
    <span> Tudo certo! Entraremos em contato para acertar os detalhes! </span>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "SubmitAnimation",

  data() {
    return {
      done: false,
    };
  },

  mounted() {
    setTimeout(() => {
      this.done = true;
    }, 2500);

    this.done = false;
  },
};
</script>

<style lang="scss" scoped>
.giant {
  width: 70px !important;
  height: 70px !important;
  font-size: 100px !important;
}
.dialog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  margin: 30px auto;
  padding: 20px;
  transition: 1s;
}
</style>
