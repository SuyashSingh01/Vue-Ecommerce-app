<template>
  <nav id="nav">
    <div class="first_part">
      <router-link to="/" class="nav-link"> Home </router-link>
      <router-link to="/about" class="nav-link"> About </router-link>
      <router-link to="/contact" class="nav-link"> Contact </router-link>
      <router-link to="/user-profile" class="nav-link"> Dashboard</router-link>
      <router-link to="/product-detail/:id" class="nav-link"> </router-link>
    </div>
    <div class="second_part">
      <router-link to="/cart" class="nav-link">
        <span class="cart-item-count">{{
          $store.getters["cart/totalItems"]
        }}</span
        >Cart
      </router-link>
      <router-link v-if="user === null" to="/auth" class="nav-link"
        >Register
      </router-link>
      <div v-else class="nav-link">
        <span>Hi,{{ user?.name }}</span>
        <router-link class="nav-link" to="/auth" @click.prevent="logout">
          Logout</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  gap: 10px;
  background: #f5f5f5;
  padding: 10px;
  justify-content: space-between;
  margin: 1rem;
}
.first_part {
  display: flex;
  gap: 10px;
  background: #f5f5f5;
  padding: 10px;
  justify-content: space-evenly;
}
.second_part {
  display: flex;
  gap: 10px;
  background: #f5f5f5;
  padding: 10px;
  justify-content: space-evenly;
}
.cart-item-count {
  font-weight: bold;
  color: red;
  margin-right: 5px;
  position: relative;
  top: -8px;
}
a {
  text-decoration: none;
}
</style>
