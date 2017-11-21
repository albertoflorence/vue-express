<template >
  <v-container v-if="user">
    <v-layout>
      <v-flex xs6>
        <v-card class="pa-5">
          <v-card-title>
            <div class="text-xs-left">
              <h1>Overview</h1>
            </div>
          </v-card-title>
          <v-card-text>
          <v-divider></v-divider>
          <v-text-field
              label="User name"
              readonly
              v-model="this.user.userName" >
            </v-text-field>
            <v-text-field
              label="Email address"
              readonly
              v-model="this.user.email" >
            </v-text-field>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

<style>

</style>
