<template>
  <v-layout>
    <v-flex xs8>
      <form @submit.prevent="search">
        <v-text-field
          append-icon="search"
          :append-icon-cb="search" 
          style="max-width: 500px; min-width: 128px"
          solo
          v-model="value">
        </v-text-field>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    value: ''
  }),
  methods: {
    search () {
      console.log(this.value)
    }
  }
}
</script>

<style>
</style>
