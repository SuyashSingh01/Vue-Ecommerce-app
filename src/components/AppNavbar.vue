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
      <router-link v-if="!isLogin" to="/auth" class="nav-link"
        >Register</router-link
      >
      <div v-else>
        Hi, {{ user?.name }}
        <router-link
          to="/user-profile"
          @click.prevent="logouthandler()"
          class="nav-link"
        >
          Logout
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const user = computed(() => store.getters["auth/user"]);
const isLogin = computed(() => store.getters["auth/isLogin"]);

const logouthandler = () => {
  console.log("Logging out...");
  store.dispatch("auth/logout");
  console.log("User logged out successfully");

  router.push({ name: "home" });
  alert("You have been logged out successfully!");
};
</script>

<style scoped>
#nav {
  display: flex;
  gap: 10px;
  background: #f0f0f3;
  padding: 10px;
  justify-content: space-between;
  margin: 1rem;
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: var(--shadow);
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
  top: -15px;
  left: 45px;
}
a {
  text-decoration: none;
}
</style>
