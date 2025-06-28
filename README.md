# Vue Ecommerce Project

A modern Ecommerce web application built with Vue 3, Vuex, Vue Router, and Tanstack Query. This project demonstrates core ecommerce features such as product listing, search, category filtering, cart management, authentication, navigation, and efficient server state management with caching.

---

## Features

- **Product Listing:**  
  Browse products fetched from a remote API and displayed in a responsive grid.

- **Vuex Store Usage:**  
  Centralized state management for products, cart, authentication, and loading states.

- **Tanstack Query Integration:**  
  Efficient caching and server state management for API data using Tanstack Query.

- **Authentication (LocalStorage):**  
  Simple registration and login system using LocalStorage to persist user data and login state.

- **Search Functionality:**  
  Search products by title or description using the search bar.

- **Category Filtering:**  
  Filter products by selecting a category from the dropdown.

- **Add to Cart / Remove from Cart:**  
  Add products to the cart from the product list or detail page, and remove or decrease quantity from the cart.

- **Navbar with Routing:**  
  Navigation bar with links to Home, About, Contact, Dashboard, Cart, and Auth pages, showing cart item count and user info.

- **Dynamic Routing:**  
  Product detail pages are accessible via dynamic routes.

- **404 Not Found:**  
  Friendly error page for unknown routes.

---

## Project Structure

```
src/
  assets/           # Static assets (images, styles)
  components/       # Reusable UI components (Navbar, ProductCard, ProductPage)
  router/           # Vue Router configuration
  services/         # API request utilities
  store/            # Vuex store and modules (auth, cart, product, loading)
  theme/            # Custom CSS theme
  views/            # Main page components (Home, Cart, Auth, etc.)
  App.vue           # Root component
  main.js           # App entry point
```

---

## How to Run

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/SuyashSingh01/Vue-Ecommerce-app.git
   cd Vue-Ecommerce-Project/app
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

3. **Run the development server:**

   ```
   npm run serve
   ```

   or

   ```
   yarn serve
   ```

4. **Open the app:**
   Visit [http://localhost:8080](http://localhost:8080) in your browser.

---

## Functionality Overview

- **Product Listing:**  
  Products are fetched from [Fake Store API](https://fakestoreapi.com/products) and displayed on the Home page. Tanstack Query is used for caching and managing server state.

- **Search & Filter:**  
  Use the search bar to filter products by name or description. Use the category dropdown to filter by category.

- **Cart Management:**  
  Add products to your cart, view cart contents, and remove or decrease quantity of items. Cart state is persisted in LocalStorage.

- **Authentication:**  
  Register and login using the Auth page. User data is stored in LocalStorage. The navbar displays user info and logout option when logged in.

- **Navigation:**  
  Use the navbar to navigate between Home, About, Contact, Dashboard, Cart, and Auth pages. Routing is handled by Vue Router.

- **Product Details:**  
  Click "View Details" on any product to see more information and add it to your cart from the detail page.

- **404 Handling:**  
  Navigating to an unknown route displays a custom 404 Not Found page.

---

## Customization

- **Add more features:**  
  Integrate a real backend for authentication, orders, or product management.

- **Styling:**  
  Update styles in `src/theme/custom.css` or use a UI framework.

- **API:**  
  Change the product API endpoint in `src/store/modules/product.js` if needed.

---

## License

This project is for educational purposes.

---

**Enjoy building and customizing your Vue Ecommerce Project!**
