<template>
  <v-toolbar fixed light flat>
    <v-toolbar-side-icon v-if="connected" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>
      Blokr 
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="connected" flat @click="signOut">SignOut</v-btn>
      <v-btn flat to="/login">Login</v-btn>
      <v-btn flat to="/sign-up">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      connected: false
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

<style>

</style>
