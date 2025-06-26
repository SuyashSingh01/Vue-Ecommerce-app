<template>
  <div class="text">Welcome to the Home Page</div>
  <ProductPage />
</template>

<script>
import ProductPage from "@/components/ProductPage.vue";

export default {
  name: "HomePage",

  components: {
    ProductPage,
  },
};
</script>

<style scoped></style>
