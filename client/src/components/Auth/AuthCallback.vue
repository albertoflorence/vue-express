<template>
  <div>
    <v-dialog
      v-model="isAuthenticated"
      fullscreen
      :overlay="true"
      scrollable
    >
    <v-card>
      <h3>Loading...</h3>
      <div v-if="!isAuthenticated">{{goToHome()}}</div>
    </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: [
    'code'
  ],
  computed: {
    isAuthenticated () {
      return !this.$store.getters.isAuthenticated
    }
  },
  methods: {
    goToHome () {
      this.$router.push({name: 'home'})
    }
  },
  created () {
    this.$store.dispatch('signInWithGoogle', this.code)
  }
}
</script>

<style>

</style>
