<template>
  <v-container>
    <v-layout>
      <v-flex>
        <form @submit.prevent="signIn">
          <v-card-title>
            <div class="text-xs-left">
              <h1>Login</h1>
              <p class="grey--text">Already have an account? Sign in here below !</p>
            </div>
          </v-card-title>
          <form-message :name="form"/>
          <v-card-text>
            <v-text-field
              label="Email"
              v-model="email" >
            </v-text-field>
            <v-text-field
              label="password"
              type="password"
              v-model="password" >
            </v-text-field>
          </v-card-text>
          <v-btn :disabled="isLoading" type="submit">
            <loading-circle :name="form" title="Login"></loading-circle>
          </v-btn>
        </form>
        <login-google/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginGoogle from './LoginGoogle'
export default {
  computed: {
    isLoading () {
      return this.$store.getters.isLoading(this.form)
    }
  },
  data: () => ({
    form: 'login',
    email: '',
    password: ''
  }),
  methods: {
    signIn () {
      this.$store.dispatch('signIn', {
        data: {
          email: this.email,
          password: this.password
        },
        from: this.form
      })
      this.$store.dispatch('startLoading', this.form)
    }
  },
  components: {
    LoginGoogle
  }
}
</script>

<style scoped>

</style>
