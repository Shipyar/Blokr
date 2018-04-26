<template>
  <div class="signup">
    <h3>Signup</h3>
    <input type="email" placeholder="Email Address" v-model="user.email">
    <input type="password" placeholder="Password" v-model="user.password">
    <button type="submit" @click.prevent="signUp">Create Account</button>
    <p><router-link to="/Login">Back to Login</router-link></p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    signUp() {
      this.$store.dispatch('signUpUser', { email: this.user.email, password: this.user.password})
    }
  }
};
</script>

<style lang="scss" scoped>
.signup {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
  a {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
