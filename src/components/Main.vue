<template>
  <v-content>
    <app-side-nav/>
    <app-board/>
  </v-content> 
</template>

<script>
import SideNav from '@/components/Shared/SideNav.vue'
import Board from '@/components/Bloks/Board.vue'

export default {
  data(){
    return {
    }
  },
  components: {
    'app-side-nav': SideNav,
    'app-board': Board
  }
}
</script>
