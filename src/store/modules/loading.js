export default {
  state: {
    isLoading: false,
  },
  mutations: {
    startLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    doneLoading(state) {
      state.isLoading = false;
    },
  },
  actions: {
    startLoading({ commit }) {
      commit("startLoading", true);
    },
    doneLoading({ commit }) {
      commit("doneLoading");
    },
  },
};
