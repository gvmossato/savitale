import { createStore } from 'vuex';

export interface Item {
  picture: string;
  name: string;
  weight: string;
  price: string;
  quantity: number;
}


interface State {
  cart: Item[];
}

export default createStore<State>({
  state: {
    cart: []
  },

  mutations: {
    addToCart(state, product: Item) {
      const itemInCart = state.cart.find((item) => item.name === product.name);

      itemInCart
        ? itemInCart.quantity++
        : state.cart.push({ ...product, quantity: 1 });
    },

    removeFromCart(state, productName: string) {
      const itemInCart = state.cart.find((item) => item.name === productName);

      itemInCart && itemInCart.quantity > 1
        ? itemInCart.quantity--
        : state.cart = state.cart.filter(item => item.name !== productName);
    }
  },

  getters: {
    cartItemCount(state): number {
      return state.cart.reduce((sum, item) => sum + item.quantity, 0);
    }
  }

})


