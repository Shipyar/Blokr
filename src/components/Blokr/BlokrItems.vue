<template>
  <v-flex xs12>
    <v-container grid-list-xl>
      <v-layout row wrap align-center>
        <app-blokr-item/>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
import BlokrItem from '@/components/Blokr/BlokrItem.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    'app-blokr-item': BlokrItem,
  }
}
</script>

<style>

</style>
