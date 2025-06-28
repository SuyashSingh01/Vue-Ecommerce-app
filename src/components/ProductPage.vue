<template>
  <div v-if="isLoading"></div>
  <div class="header">
    <div class="search-bar">
      <input
        type="text"
        placeholder="Search for products..."
        v-model="searchTerm"
      />
      <button class="btn btn-primary" @click="resetSearch">Reset</button>
    </div>

    <select v-model="selectedCategory" class="category-select">
      <option value="">All Categories</option>
      <option v-for="category in categories" :value="category" :key="category">
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

<script setup>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import ProductCard from "./ProductCard.vue";

import { useGetAllProduct } from "@/hooks/useGetAllProduct";

const { data, isLoading } = useGetAllProduct();

watch(data, (products) => {
  if (products) {
    console.log("Products fetched successfully in page", products.data);
    store.commit("product/setProducts", products.data);
  }
});
const store = useStore();

const searchTerm = ref("");
const selectedCategory = ref("");

const categories = computed(() => store.getters["product/categories"]);

const filteredProducts = computed(() =>
  store.getters["product/getFilteredProducts"]({
    searchTerm: searchTerm.value,
    category: selectedCategory.value,
  })
);

function resetSearch() {
  searchTerm.value = "";
  selectedCategory.value = "";
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 3%;
}
.search-bar {
  display: flex;
  width: 60%;
  gap: 10px;
}

.search-bar input {
  width: 100%;
  padding: 5px;
  font-size: 16px;
}
.search-bar button {
  padding: 5px 10px;
  font-size: 16px;
}
.category-select {
  padding: 5px;
  font-size: 16px;
}
.product_page {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
