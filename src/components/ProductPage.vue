<template>
  <div class="header">
    <div class="search-bar">
      <input
        type="text"
        placeholder="Search for products..."
        v-model="searchTerm"
      />
      <button @click="resetSearch">Reset</button>
    </div>

    <select v-model="selectedCategory" class="category-select">
      <option value="">All Categories</option>
      <option
        v-for="category in $store.getters['product/categories']"
        :value="category"
        :key="category"
      >
        {{ category }}
      </option>
    </select>
  </div>

  <h1>Product</h1>
  {{ filteredProducts.length }} products available

  <div class="product_page">
    <div class="text-center" v-if="!filteredProducts.length">
      <p>No products found.</p>
    </div>
    <ProductCard
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductPage",

  data() {
    return {
      searchTerm: "",
      selectedCategory: "",
    };
  },

  async mounted() {
    await this.$store.dispatch("product/fetchProducts");
  },

  computed: {
    filteredProducts() {
      return this.$store.getters["product/getFilteredProducts"]({
        searchTerm: this.searchTerm,
        category: this.selectedCategory,
      });
    },
  },

  methods: {
    resetSearch() {
      this.searchTerm = "";
      this.selectedCategory = "";
    },
  },

  components: {
    ProductCard,
  },
};
</script>

<style scoped>
.product_page {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
