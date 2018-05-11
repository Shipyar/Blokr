<template>
  <v-snackbar :timeout="timeout"
      :color="color"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
  >
    {{ text }}
    <v-btn dark flat @input="onClose" @click.native="snackbar = false">Close</v-btn>
  </v-snackbar>
  <!-- <v-alert type="error" :value="true" dismissible @input="onClose">
    {{ text }}
  </v-alert> -->
</template>

<script>
export default {
  props: ['text'],
  data(){
    return {
      snackbar: false,
      color: 'red',
      mode: 'multi-line',
      timeout: 6000,
    }
  },
  methods: {
    onClose() {
      this.$emit('dismissed')
    }
  }
}
</script>
