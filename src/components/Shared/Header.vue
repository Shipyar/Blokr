<template>
  <v-toolbar fixed light>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>
      Blokr 
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="signOut">SignOut</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    async signOut() {
      console.log('starting Logout')
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
