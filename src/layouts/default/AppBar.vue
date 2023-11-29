<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-container fluid>
        <v-row class="d-flex align-center">
          <v-col cols="12" sm="2">
            <img src="img/logo.svg" alt="logo" width="120" />
          </v-col>
          <v-spacer />
          <v-col cols="12" sm="4">
            <nav class="d-flex justify-space-around">
              <v-btn prepend-icon="mdi-home" text="true" to="/">Início</v-btn>

              <v-btn prepend-icon="mdi-shopping" text="true" to="/store">
                Loja
              </v-btn>

              <v-badge
                v-model="showBadge"
                :content="basketAmount"
                color="primary"
              >
                <v-btn prepend-icon="mdi-basket" text="true" to="/basket">
                  Cesta
                </v-btn>
              </v-badge>

              <v-btn prepend-icon="mdi-account-circle" text="true" to="/login">
                Conta
              </v-btn>
            </nav>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "AppBar",

  setup() {
    const store = useStore();
    const basketAmount = computed(() => store.getters.basketItemCount);
    return { basketAmount };
  },

  computed: {
    showBadge() {
      return this.basketAmount > 0;
    },
  },
};
</script>
