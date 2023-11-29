<template>
  <v-card class="mx-auto mt-8" max-width="700">
    <v-toolbar color="primary">
      <v-toolbar-title>Entrega</v-toolbar-title>
    </v-toolbar>
    <v-img class="mt-8" src="img/basket/delivery.svg" height="200" />
    <v-card-text>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="8">
              <v-text-field
                autofocus
                hide-details
                label="Endereço"
                density="compact"
                prepend-inner-icon="mdi-road"
              />
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                hide-details
                label="Número"
                density="compact"
                prepend-inner-icon="mdi-numeric"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="8">
              <v-text-field
                hide-details
                label="Ponto de referência"
                density="compact"
                prepend-inner-icon="mdi-map-marker"
              />
            </v-col>
            <v-col cols="12" sm="4" class="d-flex align-center">
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn
                    size="x-small"
                    color="primary"
                    v-bind="props"
                    icon="mdi-calendar"
                  />
                </template>
                <v-date-picker
                  color="primary"
                  v-model="date"
                  show-adjacent-months
                  title="Data de Entrega"
                />
              </v-menu>
              <v-text-field
                readonly
                hide-details
                class="ml-2"
                density="compact"
                placeholder="Data de Entrega"
                :value="formatDate(date)"
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
        prepend-icon="mdi-map-marker-check"
        @click="handleConfirm"
      >
        Confirmar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { formatDate } from "@/utils/format/date";

export default {
  name: "DeliveryForm",

  data: () => ({
    date: null,
  }),

  computed: {
    minDate() {
      const today = new Date();
      const minDate = new Date();

      minDate.setDate(today.getDate() + 2);
      return minDate;
    },

    maxDate() {
      const today = new Date();
      const maxDate = new Date();

      maxDate.setDate(today.getDate() + 20);
      return maxDate;
    },
  },
  methods: {
    formatDate,

    handleConfirm() {
      this.$emit("next-step");
    },

    handleBack() {
      this.$emit("prev-step");
    },
  },
};
</script>
