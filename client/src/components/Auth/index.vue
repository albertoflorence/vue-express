<template>
  <v-container v-if="isNotLoggedIn">
    <v-layout>
      <v-flex xs12 md10 offset-md1>
        <v-card>
          <v-layout row :column="$vuetify.breakpoint.xsOnly">
            <v-flex xs8>
              <register></register>
            </v-flex>
              <div class="vdivisor"></div>
            <v-flex xs4>
              <login></login>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Register from './Register'
import Login from './Login'
export default {
  computed: {
    isNotLoggedIn () {
      if (this.$store.getters.isAuthenticated) {
        this.$router.push({name: 'home'})
        return false
      }
      return true
    }
  },
  data: () => ({
  }),
  components: {
    Register,
    Login
  }
}
</script>

<style>
.vdivisor {
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
