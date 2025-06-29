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
      localStorage.setItem("userData", JSON.stringify(user));
    },
    setIsLogin(state, user) {
      const savedData = JSON.parse(localStorage.getItem("userData"));
      if (
        savedData &&
        savedData.email === user.email &&
        savedData.password === user.password
      ) {
        console.log("Login successful");
        state.isLogin = true;
        alert("Login successful!");
      } else {
        alert("Invalid credentials. Try again!");
      }
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
      commit("setIsLogin", userData);
    },
    register({ commit }, userData) {
      commit("setUser", userData);
    },
    logout({ commit }) {
      console.log("Logging out from Vuex...");
      commit("logout");
    },
  },
  getters: {
    isLogin: (state) => state.isLogin,
    user: (state) => state.user,
  },
};
