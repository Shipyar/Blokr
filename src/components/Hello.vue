<template>
  <div>
    YOU ARE LOGGED IN
    <div class="button">
      <button @click="signOut">Sign Out!</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  methods: {
    signOut() {
      firebase.auth().signOut().then(() => {
        // Signout successful
        this.$router.replace('login')
      }).catch((err) => {
        // Error happened
      })
    }
  }
}
</script>

<style>

</style>
