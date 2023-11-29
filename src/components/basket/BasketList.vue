<template>
  <v-card class="mx-auto mt-8" max-width="700">
    <v-toolbar color="primary">
      <v-toolbar-title>
        {{
          basketItems.length
            ? "Cesta"
            : "Sua cesta ainda está vazia!"
        }}
      </v-toolbar-title>
    </v-toolbar>

    <v-card-text v-if="basketItems.length">
      <v-list :items="basketItems" item-props lines="three">
        <template v-slot:title="{ title }">
          <div v-html="title"></div>
        </template>
        <template v-slot:subtitle="{ subtitle }">
          <div v-html="subtitle"></div>
        </template>
      </v-list>
      <v-table class="mt-8" hover density="compact">
        <tbody>
          <tr
            v-for="item in basketSummary"
            :key="item.name"
            :class="item.class"
          >
            <td>{{ item.name }}</td>
            <td class="value-cell">{{ item.value }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" prepend-icon="mdi-arrow-left" to="/store">
        Voltar para loja
      </v-btn>
      <v-spacer />
      <v-btn
        v-if="basketItems.length"
        color="error"
        to="/store"
        @click="clearBasket"
        prepend-icon="mdi-basket-off"
      >
        Esvaziar cesta
      </v-btn>
      <v-btn
        variant="flat"
        v-if="basketItems.length"
        class="pl-3"
        color="primary"
        prepend-icon="mdi-basket-check"
        @click="handleConfirm"
      >
        Confirmar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Item } from "@/store";
import { formatMoney } from "@/utils/format/number";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "BasketList",

  setup() {
    const store = useStore();
    const basketStore = computed(() => store.state.basket);
    const basketTotals = computed(() => store.getters.basketTotals);

    const basketSummary = [
      {
        name: "Subtotal",
        class: "detail-row",
        value: formatMoney(basketTotals.value.subtotal),
      },
      {
        name: "Frete",
        class: "detail-row",
        value: formatMoney(basketTotals.value.shipping),
      },
      {
        name: "Cupom",
        class: "discount-row",
        value: formatMoney(basketTotals.value.discount),
      },
      {
        name: "Total",
        class: "total-row",
        value: formatMoney(basketTotals.value.total),
      },
    ];

    const basketItems = basketStore.value.flatMap((el: Item) => {
      const item = {
        prependAvatar: `/img/store/items/${el.picture}`,
        title: `
          <span class='text-primary font-weight-bold'>${el.quantity}x </span>
          <span>${formatMoney(el.price)} — </span>
          <span>${el.name}</span>
          <span class='text-grey'> (${el.weight} g)</span>
        `,
        subtitle: `
        <span class="font-weight-bold">Subtotal: </span>
        <span>
          ${el.weight * el.quantity} g
          por ${formatMoney(el.price * el.quantity)}
        </span>
      `,
      };
      const divider = { type: "divider", inset: true };
      return [item, divider];
    });

    const clearBasket = () => store.commit("clearBasket");

    return {
      basketItems,
      basketSummary,
      clearBasket,
    };
  },

  methods: {
    handleConfirm() {
      this.$emit("next-step");
    },
  },
});
</script>

<style lang="scss" scoped>
.total-row {
  font-size: 14pt;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 5px;
  justify-content: space-between;
}

.detail-row {
  font-size: 10pt;
  justify-content: space-between;
}

.discount-row {
  font-size: 10pt;
  color: rgb(0, 156, 0);
  justify-content: space-between;
}

.value-cell {
  text-align: right;
}
</style>
