<template>
  <section>
      <v-flex xs12>
        <v-container>
          <v-layout row wrap justify-space-between>
            <v-flex xs6>
              <div class="subheading mt-3 text-xs-left">Blokr</div>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs1>
              <v-btn
                right
                round
                type="submit"
                @click.stop="dialog = true"
                color="primary"
              >
              +
            </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <app-blokr-create :dialog="false"
      />
    </section>
</template>

<script>
import BCreate from '@/components/Blokr/BlokrCreate.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    'app-blokr-create': BCreate, 
  },

}
</script>

<style>

</style>
