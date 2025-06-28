<template>
  <div class="product-card">
    <div class="product-image">
      <div class="badge-success" v-if="product.quantity">
        <span>Quantity:{{ product.quantity }} </span>
      </div>
      <img :src="product.image" alt="Product Image" class="product__img" />
    </div>
    <div class="product-details">
      <p class="product-category">{{ product.category }}</p>

      <h3 class="product-title">{{ product.title }}</h3>
      <div class="product-price">${{ product.price?.toFixed(2) }}</div>
    </div>
    <div class="product-card-btn">
      <button class="btn btn-primary" @click="addToCart">
        {{ currentRoute !== "/cart" ? "Add to Cart" : "+" }}
      </button>
      <button
        class="btn btn-primary"
        v-if="currentRoute === '/cart'"
        @click="removeItem"
      >
        -
      </button>
      <button class="btn btn-secondary" @click="viewDetails">
        View Details
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    currentRoute() {
      return this.$router.currentRoute._value.path;
    },
  },

  methods: {
    addToCart() {
      this.$store.commit("cart/addToCart", this.product);
    },
    removeItem() {
      this.$store.commit("cart/removeFromCart", this.product.id);
    },
    viewDetails() {
      this.$router.push({
        name: "product-detail",
        params: { id: this.product.id },
      });
    },
  },
};
</script>

<style scoped>
.product-card {
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.product-image {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: var(--white);
}

.product-image img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.product-details {
  padding: 15px;
}

.product-category {
  color: var(--dark-gray);
  font-size: 14px;
  text-transform: capitalize;
  margin-bottom: 5px;
}

.product-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  height: 44px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-price {
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 15px;
}
.product-card-btn {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}
.badge-success {
  position: relative;
  top: -100px;
  left: -50px;
  font-weight: 300;
  font-size: 1rem;
}
</style>
