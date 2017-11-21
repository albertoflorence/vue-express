<template>
  <div>
    <v-progress-circular indeterminate v-if="isLoading"></v-progress-circular>
    <span v-else>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'loading-circle',
  props: [
    'title', 'name', 'type'
  ],
  computed: {
    isLoading () {
      return this.$store.getters.isLoading(this.name)
    }
  }
}
</script>

<style>

</style>
