<template>
  <div class="text">Welcome to the Product Detail Page</div>
  <div class="product-detail">
    <h1 class="product-title">{{ product.title }}</h1>
    <img :src="product.image" alt="Product Image" class="product__img" />
    <p class="product-price">${{ product.price?.toFixed(2) }}</p>
    <p class="product-description">{{ product.description }}</p>
    <div class="product-actions">
      <button v-if="!isadded.value" class="btn btn-primary" @click="AddCart()">
        Add to Cart
      </button>
      <button v-else class="btn btn-secondary" disabled>Already in Cart</button>
      <button class="btn btn-secondary" @click="$router.push('/cart')">
        Go to Cart
      </button>
      <button class="btn btn-primary" @click="$router.go(-1)">Go Back</button>
    </div>
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
const isadded = ref(store.getters["cart/isProductInCart"](productId));

if (isadded.value) {
  console.log("Product is already in the cart");
} else {
  console.log("Product is not in the cart");
}

const AddCart = () => {
  store.commit("cart/addToCart", product.value);
};

onMounted(() => {
  const products = store.state.product.products.find((p) => p.id === productId);

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
.product-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}
</style>
