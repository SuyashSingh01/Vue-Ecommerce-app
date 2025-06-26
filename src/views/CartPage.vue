<template>
  <div class="cart-page">
    <h1 class="text-center">Your Cart</h1>
    <div v-if="!cartProducts.length" class="text-center">
      <h1>Your cart is empty.</h1>
      <p>Please add some products to your cart.</p>
    </div>
    <div class="cart-products">
      <ProductCard
        v-for="product in cartProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="cart-summary">
      <h2>Cart Summary</h2>
      <p>Total Items: {{ $store.getters["cart/totalItems"] }}</p>
      <p>Total: {{ $store.getters["cart/totalPrice"] }}</p>
      <button class="btn btn-primary">Checkout</button>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { mapState } from "vuex";

export default {
  name: "CartPage",

  computed: {
    ...mapState("cart", ["items"]),
    cartProducts() {
      return this.items;
    },
  },

  components: {
    ProductCard,
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
  margin: 20px 0;
  margin-bottom: 20px;
}
.cart-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  border-radius: 8px;
}
.cart-products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 20px;
}
.cart-summary {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: var(--shadow);
}
.cart-summary h2 {
  margin-bottom: 10px;
}
.cart-summary p {
  margin: 5px 0;
}
</style>
