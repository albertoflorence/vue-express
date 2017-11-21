<template>
  <v-container>
    <v-layout>
      <v-flex xs6>
        <v-card class="pa-5">
          <form @submit.prevent="changeEmail">
            <v-card-title>
              <div class="text-xs-left">
                <h1>Change Email</h1>
              </div>
            </v-card-title>
            <v-divider></v-divider>
            <form-message :name="form"/>
            <v-card-text>
              <v-text-field
                label="Current e-mail address"
                readonly
                class="mb-4"
                v-model="$store.getters.user.email">
              </v-text-field>
              <v-text-field
                label="New e-mail address"
                v-model="newEmail" >
              </v-text-field>
              <v-text-field
                label="Password"
                type="password"
                v-model="password">
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
    form: 'changeEmail',
    newEmail: '',
    password: ''
  }),
  methods: {
    changeEmail () {
      this.$store.dispatch('changeEmail', {
        data: {
          password: this.password,
          newEmail: this.newEmail
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
