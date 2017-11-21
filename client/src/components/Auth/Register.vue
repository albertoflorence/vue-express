<template>
  <v-container>
    <v-layout>
      <v-flex xs12 md10 offset-md1>
        <form @submit.prevent="signUp">
          <v-card-title><h1>Register</h1></v-card-title>
            <form-message :name="form"/>
            <v-card-text>
              <v-layout :column="$vuetify.breakpoint.xsOnly">
                <v-flex xs12 md5>
                  <v-text-field
                    label="Email"
                    placeholder="you@example.com"
                    v-model="email" >
                  </v-text-field>
                  <v-text-field
                    placeholder="Create a password"
                    label="Password"
                    type="password"
                    v-model="password" >
                  </v-text-field>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs12 md5>
                  <v-text-field
                    label="Username"
                    placeholder="Pick a username"
                    v-model="userName" >
                  </v-text-field>
                  <v-select
                    label="Your Gender"
                    persistent-hint
                    :items="genderOptions"
                    v-model="gender"
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card-text>
          <v-btn :disabled="isLoading" type="submit">
            <loading-circle :name="form" title="Register"></loading-circle>
          </v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    form: 'register',
    email: '',
    password: '',
    userName: '',
    gender: '',
    genderOptions: [
      { value: 'female', text: 'Female' },
      { value: 'male', text: 'Male' },
      { value: 'other', text: 'Other' }
    ]
  }),
  computed: {
    isLoading () {
      return this.$store.getters.isLoading(this.form)
    }
  },
  methods: {
    signUp () {
      this.$store.dispatch('signUp', {
        data: {
          email: this.email,
          password: this.password,
          gender: this.gender,
          userName: this.userName
        },
        from: this.form
      })
      this.$store.dispatch('startLoading', this.form)
    }
  }
}
</script>

<style>

</style>
