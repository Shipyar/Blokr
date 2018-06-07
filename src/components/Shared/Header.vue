<template>
  <v-toolbar fixed light flat>
    <router-link to="/" tag="img"></router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="connected" flat @click="signOut">SignOut</v-btn>
      <v-btn flat to="/SignIn">Login</v-btn>
      <v-btn flat to="/SignUp">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
  data() {
    return {
      connected: false,
    }
  },
  methods: {
    async signOut() {
      try {
        await this.$store.dispatch('signOutUser')
      } finally {
        this.$router.replace('login')
      }  
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

