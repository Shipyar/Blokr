<template>
  <v-toolbar fixed light flat>
    <router-link to="/" :src="image" class="logo" tag="img"></router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="connected" flat @click="signOut">SignOut</v-btn>
      <v-btn flat to="/login">Login</v-btn>
      <v-btn flat to="/sign-up">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Image from '@/assets/images/blokrlogo.png'

export default {
  data() {
    return {
      connected: false,
      image: Image
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
.logo {
  width: 30px;
  height: 30px;
}
</style>

