<template>
  <div class="auth-wrapper">
    <div class="form-card">
      <h2>{{ $store.state.isLogin ? "Login" : "Register" }}</h2>

      <form @submit.prevent="handleSubmit">
        <div v-if="!isLogin" class="form-group">
          <label class="form_label" for="name">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <div class="form-group">
          <label class="form_label" for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="form-group">
          <label class="form_label" for="password">Password</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" class="btn">
          {{ isLogin ? "Login" : "Register" }}
        </button>
      </form>

      <p class="toggle-text">
        {{
          $store.state.isLogin
            ? "Don't have an account?"
            : "Already have an account?"
        }}
        <span @click="toggleForm">{{ isLogin ? "Register" : "Login" }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthForm",
  data() {
    return {
      isLogin: JSON.parse(localStorage.getItem("userData")) ? true : false,
      submitted: false,
      form: {
        name: "",
        email: "",
        password: "",
      },
      submittedData: {},
    };
  },
  methods: {
    toggleForm() {
      this.isLogin = JSON.parse(localStorage.getItem("userData"))
        ? true
        : !this.isLogin;
      this.submitted = false;
      this.form = { name: "", email: "", password: "" };
    },
    handleSubmit() {
      this.submitted = true;
      this.submittedData = { ...this.form };

      if (this.isLogin) {
        this.$store.dispatch("auth/login", {
          email: this.form.email,
          password: this.form.password,
        });
        console.log("Login successful");
        this.$router.push({ name: "user-profile" });
      } else {
        console.log("Registration successful");
        this.$store.dispatch("auth/register", {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
        });
        this.isLogin = true;
        alert("Registration successful! Please log in.");
      }

      this.form.name = "";
      this.form.email = "";
      this.form.password = "";
    },
  },
  mounted() {
    const userData = this.$store.getters["auth/user"];
    console.log("User Data in mounting phase:", userData);
    if (userData) {
      this.$router.push({ name: "user-profile" });
    }
  },
};
</script>

<style scoped>
@import url("../theme/custom.css");
.form_label {
  text-align: left;

  font-size: 0.9rem;
}
.auth-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f6fa;
  padding: 20px;
}

.form-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow, 0 4px 8px rgba(0, 0, 0, 0.1));
  width: 100%;
  max-width: 400px;
  margin-bottom: 2rem;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: var(--primary-color, #007bff);
}

.btn {
  width: 100%;
  padding: 12px;
  background-color: var(--primary-color, #007bff);
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 1rem;
}

.btn:hover {
  background-color: var(--secondary-color, #0056b3);
}

.toggle-text {
  text-align: center;
  margin-top: 1rem;
  color: #555;
  font-size: 0.9rem;
}

.toggle-text span {
  color: var(--secondary, #007bff);
  font-weight: 600;
  cursor: pointer;
  margin-left: 6px;
}

.toggle-text span:hover {
  text-decoration: underline;
}
</style>
