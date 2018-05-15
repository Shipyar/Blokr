<template>
<v-card>
  <v-snackbar
    bottom
    color="error"
    v-model="snack"
  >
    {{ text }}
    <v-btn dark flat dissmisable @click.native="onClose">Close</v-btn>
  </v-snackbar>
</v-card>
</template>

<script>
export default {
  props: ['text', 'snack'],
  data(){
    return {
      snack: false,
    }
  },
  methods: {
    onClose() {
      this.$emit('dismissed');
    }
  }
}
</script>
