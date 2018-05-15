<template>
  <v-navigation-drawer
  app
  class="blokr-green"
  width="200"
  floating
  >
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" @click="navigate(item)">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Team' },
        { title: 'Projects' },
        { title: 'My Board' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  color: #fff;
}
.application .theme--light.navigation-drawer, .theme--light .navigation-drawer {
  background-color: #2AD19A;
}

</style>

