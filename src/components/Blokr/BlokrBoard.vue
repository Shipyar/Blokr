<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        Blokr

        <v-btn
        round
        type="submit"
        @click.stop="newBlok = true"
        color="primary"
        >
        +
        </v-btn>
      </v-flex>
      <app-new-blok
        v-if="newBlok"
      >
      </app-new-blok>
      <hr>
    </v-layout>
  </v-container>
</template>

<script>
import NewBlok from '@/components/Blokr/BlokrCreate.vue'

export default {
  data() {
    return {
      NewBlok: false,
    }
  },
  components: {
    'app-new-blok': NewBlok
  }
}
</script>

<style>

</style>
