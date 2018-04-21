<template>
  <div class="login">
    <h3>Login</h3>
    <input type="email" placeholder="Email Address" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button type="submit" @click.prevent="login">Login</button>
    <p><router-link to="/Signup">Create an account </router-link></p>
  </div>
</template>

<script>
// Firebase Import for login systems
import firebase from "firebase";

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(msg => {
          alert('successful connection');
        })
        .catch(err => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          alert('unsuccessful connection');
          console.log(errorCode + errorMessage);
        });
    }
  }
};
</script>

<style lang="scss">
.login {
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
