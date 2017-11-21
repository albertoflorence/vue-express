<template>
  <v-container>
    <v-layout>
      <v-flex xs6>
        <v-card class="pa-5">
          <form @submit.prevent="changePassword">
            <v-card-title>
              <div class="text-xs-left">
                <h1>Change Password</h1>
              </div>
            </v-card-title>
            <v-divider></v-divider>
            <form-message :name="form"/>
            <v-card-text>
              <v-text-field
                label="Current password"
                type="password"
                v-model="password" >
              </v-text-field>
              <v-text-field
                label="New password"
                type="password"
                v-model="newPassword">
              </v-text-field>
              <v-text-field
                label="Confirm password"
                type="password"
                v-model="confirmPassword">
              </v-text-field>
            </v-card-text>
            <v-btn :disabled="isLoading" type="submit">
              <loading-circle :name="form" title="Save"></loading-circle>
            </v-btn>
          </form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    isLoading () {
      return this.$store.getters.isLoading(this.form)
    }
  },
  data: () => ({
    form: 'changePassword',
    password: '',
    newPassword: '',
    confirmPassword: ''
  }),
  methods: {
    changePassword () {
      this.$store.dispatch('changePassword', {
        data: {
          password: this.password,
          newPassword: this.newPassword,
          confirmPassword: this.confirmPassword
        },
        from: this.form
      })
      this.$store.dispatch('startLoading', this.form)
    }
  }

}
</script>

<style>
 .padding {
   padding: 10px
 }
</style>
