<template>
  <v-alert type="error" :value="true" dismissible @input="onClose">
    {{ text }}
  </v-alert>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    onClose() {
      this.$emit('dismissed')
    }
  }
}
</script>
