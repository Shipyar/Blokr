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
                @click="showDialog = !showDialog"
                color="primary"
              >
              +
            </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <app-blokr-create  
        v-if="showDialog"
        :diag="true"/>
    </section>
</template>

<script>
import BCreate from '@/components/Blokr/BlokrCreate.vue';

export default {
  data() {
    return {
      showDialog: false
    }
  },
  components: {
    'app-blokr-create': BCreate, 
  },

}
</script>

<style>

</style>
