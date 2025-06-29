<template>
  <div class="app">
    <AppNavbar />
    <router-view />
  </div>
</template>

<script setup>
import AppNavbar from "./components/AppNavbar.vue";
</script>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px auto;
}
</style>
