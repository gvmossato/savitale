import { createStore } from 'vuex';

export interface Item {
  picture: string;
  name: string;
  weight: number;
  price: number;
  quantity: number;
}

interface State {
  basket: Item[];
}

export default createStore<State>({
  state: {
    basket: []
  },

  mutations: {
    addToBasket(state, product: Item) {
      const itemInBasket = state.basket.find((item) => item.name === product.name);

      itemInBasket
        ? itemInBasket.quantity++
        : state.basket.push({ ...product, quantity: 1 });
    },

    removeFromBasket(state, productName: string) {
      const itemInBasket = state.basket.find((item) => item.name === productName);

      itemInBasket && itemInBasket.quantity > 1
        ? itemInBasket.quantity--
        : state.basket = state.basket.filter(item => item.name !== productName);
    },

    clearBasket(state) {
      state.basket = [];
    }
  },

  getters: {
    basketItemCount(state): number {
      return state.basket.reduce((sum, item) => sum + item.quantity, 0);
    },

    basketTotals(state): { subtotal: number, shipping: number, discount: number, total: number } {
      const subtotal = state.basket.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
      const shipping = subtotal > 100 ? 0 : subtotal * 0.1;
      const discount = subtotal * 0.2;
      const total = subtotal + shipping - discount;

      return {
        subtotal,
        shipping,
        discount,
        total,
      }
    }
  }

})
