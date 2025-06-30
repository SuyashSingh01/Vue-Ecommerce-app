import { useToast } from "vue-toast-notification";
const $toast = useToast();

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
        $toast.success(`Product quantity is ${existing.quantity}`, {
          position: "bottom-right",
          duration: 2000,
        });
      } else {
        state.items.push({ ...product, quantity: 1 });
        $toast.success("Product added to cart", {
          position: "bottom-right",
          duration: 2000,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart(state, productId) {
      const item = state.items.find((p) => p.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
        $toast.info(`Product quantity is ${item.quantity}`, {
          position: "bottom-right",
          duration: 2000,
        });
      } else {
        state.items = state.items.filter((p) => p.id !== productId);
        $toast.error("Product removed from cart", {
          position: "bottom-right",
          duration: 2000,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = [];
      localStorage.removeItem("cartItems");
      $toast.success("Cart cleared", {
        position: "bottom-right",
        duration: 2000,
      });
    },
  },
  actions: {
    clearCart({ commit }) {
      console.log("Cart cleared from vuex");
      commit("clearCart");
    },
  },

  getters: {
    totalItems: (state) => state.items.length,
    totalPrice: (state) =>
      state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    CartProducts: (state) => state.items,
    isProductInCart: (state) => (productId) => {
      return state.items.some((item) => item.id === productId);
    },
  },
};
