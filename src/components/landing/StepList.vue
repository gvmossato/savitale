<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" v-for="step in steps" :key="step.alt">
        <StepItem
          :picture="step.picture"
          :alt="step.alt"
          :title="step.title"
          :description="step.description"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import StepItem from "@/components/landing/StepItem.vue";

export default {
  data: () => ({
    steps: [
      {
        picture: "save.png",
        alt: "save",
        title: "Resgatamos frutas...",
        description:
          "Que seriam desperdiçadas só por não estarem tão bonitas! Tudo isso seguindo um rigoroso controle de qualidade.",
      },
      {
        picture: "sell.png",
        alt: "sell",
        title: "Oferecemos cestas...",
        description:
          "Prontas ou totalmente personalizadas! Para você ter tudo de que precisa a um toque de distância.",
      },
      {
        picture: "delivery.png",
        alt: "delivery",
        title: "Entregamos tudo...",
        description:
          "Diretamente na porta da sua casa! Garantindo o frescor e a qualidade que você deseja.",
      },
    ],
  }),

  components: {
    StepItem,
  },
};
</script>
