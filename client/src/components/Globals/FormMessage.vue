<template>
  <v-alert
    :color="color"
    :icon="icon"
    value="true"
    v-if="lastFormMessage">
    {{message}}
  </v-alert>
</template>

<script>
export default {
  name: 'form-message',
  props: [
    'name'
  ],
  computed: {
    message () {
      return this.$store.getters.formMessage
    },
    lastFormMessage () {
      return this.$store.getters.lastFormMessage === this.name
    },
    lastFormMessageType () {
      return this.$store.getters.lastFormMessageType
    },
    icon () {
      const icons = {
        error: 'warning',
        success: 'check_circle'
      }
      return icons[this.lastFormMessageType]
    },
    color () {
      const colors = {
        error: 'error',
        success: 'success'
      }
      return colors[this.lastFormMessageType]
    }
  },
  destroyed () {
    this.$store.dispatch('clearMessages')
  }
}
</script>

<style>
</style>
