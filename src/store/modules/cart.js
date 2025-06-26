export default {
  namespaced: true,
  state: () => ({
    items: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  }),
  mutations: {
    addToCart(state, product) {
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity++;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart(state, productId) {
      const item = state.items.find((p) => p.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        state.items = state.items.filter((p) => p.id !== productId);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },

  getters: {
    totalItems: (state) => state.items.length,
    totalPrice: (state) =>
      state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
  },
};
