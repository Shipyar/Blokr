<template>
  <v-app>
    <app-side-nav/>
    <v-content>
      <v-container fluid>
        <app-board/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from '@/components/Shared/SideNav.vue';
import Board from '@/components/Blokr/BlokrBoard.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    'app-side-nav': SideNav,
    'app-board': Board,
  },
};
</script>
