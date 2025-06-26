export default {
  namespaced: true,
  state: () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    return {
      user: userData,
      isLogin: !!userData,
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isLogin = !!user;
    },
    logout(state) {
      console.log("Logging out...");
      state.user = null;
      state.isLogin = false;
      localStorage.removeItem("userData");
    },
  },
  actions: {
    login({ commit }, userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
      commit("setUser", userData);
    },
    logout({ commit }) {
      commit("logout");
    },
  },
  getters: {
    isLogin: (state) => state.isLogin,
    user: (state) => state.user,
  },
};
