<template>
  <div class="text">Welcome to the Product Detail Page</div>
  <div class="product-detail">
    <h1 class="product-title">{{ product.title }}</h1>
    <img :src="product.image" alt="Product Image" class="product__img" />
    <p class="product-price">${{ product.price?.toFixed(2) }}</p>
    <p class="product-description">{{ product.description }}</p>
    <button class="btn btn-primary" @click="AddCart">Add to Cart</button>
    <button class="btn btn-secondary" @click="$router.push({ name: 'cart' })">
      View Cart
    </button>
  </div>
  <div v-if="!product" class="text-center">Product not found</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { onMounted, ref } from "vue";

const route = useRoute();
const store = useStore();
const product = ref({});

const productId = parseInt(route.params.id);
console.log("Product ID:", productId);

const AddCart = () => {
  store.commit("cart/addToCart", product);
  console.log("Product added to cart:", product);
};

onMounted(() => {
  const products = store.state.product.products.find((p) => p.id === productId);
  console.log("Product on Mounting Phase:", products);
  if (products) {
    product.value = products;
  } else {
    alert("Product not found");
    console.error("Product not found");
  }
});
</script>

<style scoped>
.product-detail {
  max-width: 700px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
}
.product__img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.product-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.product-price {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
}
.product-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
}
</style>
