<template>
  <v-card class="mx-auto mt-8" max-width="700">
    <v-toolbar color="primary">
      <v-toolbar-title>Pagamento</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-container class="d-flex justify-center align-center">
          <v-row>
            <v-col cols="12">
              <v-text-field
                autofocus
                hide-details
                label="Títular"
                density="compact"
                prepend-inner-icon="mdi-account"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                hide-details
                label="Número"
                density="compact"
                prepend-inner-icon="mdi-credit-card"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                hide-details
                label="Validade"
                density="compact"
                placeholder="MM/AA"
                prepend-inner-icon="mdi-calendar-clock"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                hide-details
                label="CVV"
                density="compact"
                prepend-inner-icon="mdi-lock"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-img
                class="ml-8"
                src="/img/basket/credit-card.svg"
                width="300"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="error" prepend-icon="mdi-arrow-left" @click="handleBack">
        Voltar
      </v-btn>
      <v-spacer />
      <v-btn
        class="pl-3"
        color="primary"
        variant="flat"
        prepend-icon="mdi-check"
        @click="handleConfirm"
      >
        Finalizar pedido
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "PaymentForm",

  methods: {
    handleConfirm() {
      this.$emit("next-step");
    },

    handleBack() {
      this.$emit("prev-step");
    },
  },
};
</script>
