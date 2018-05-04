<template>
  <v-alert type="error" dismissible @input="onClose" :value="true">
    {{ text }}
  </v-alert>
</template>

<script>
import 'vuetify/dist/vuetify.min.css';

export default {
  props: ['text'],
  methods: {
    onClose() {
      this.$emit('dismissed')
    }
  }
}
</script>

<style>

</style>
