import { createStore } from "vuex";
import auth from "./modules/auth.js";
import cart from "./modules/cart";
import product from "./modules/product";
import loading from "./modules/loading.js";

const store = createStore({
  modules: {
    product,
    loading,
    auth,
    cart,
  },
});
export default store;
