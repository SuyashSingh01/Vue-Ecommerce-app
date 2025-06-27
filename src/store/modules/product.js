export default {
  namespaced: true,

  state: {
    products: [],
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
      console.log("Products set in Vuex:", products);
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
