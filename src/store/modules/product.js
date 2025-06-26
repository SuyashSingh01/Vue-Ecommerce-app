import { request } from "@/services/request";

export default {
  namespaced: true,

  state: {
    products: [],
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },

  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await request(
          "GET",
          "https://fakestoreapi.com/products"
        );
        const products = response.data;
        console.log("Fetched products:", products);
        commit("setProducts", products);
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    },
  },

  getters: {
    products: (state) => state.products,

    categories: (state) => {
      return Array.from(new Set(state.products.map((p) => p.category)));
    },

    getFilteredProducts:
      (state) =>
      ({ category, searchTerm }) => {
        let filtered = [...state.products];

        if (category) {
          filtered = filtered.filter((p) => p.category === category);
        }

        if (searchTerm) {
          const term = searchTerm.toLowerCase();
          filtered = filtered.filter(
            (p) =>
              p.title.toLowerCase().includes(term) ||
              p.description.toLowerCase().includes(term)
          );
        }

        return filtered;
      },
  },
};
