<template>
  <v-btn
    color="red" 
    dark class="normalcase"
    @click="signIn"> 
    <span class="g">g</span>
    +
    <div class="divisor"></div>
    Sign in with Google
  </v-btn>
</template>

<script>
export default {
  methods: {
    signIn () {
      this.$store.dispatch('signInWithSocialRedirect', 'google')
    }
  }
}
</script>

<style scoped>
.normalcase {
  text-transform: none;
  font-weight: bold;
}
.divisor {
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  height: 36px;
  margin: 0px 10px 0px 10px;
}
.g {
  font-family: "Gentium Basic";
  font-size: 25px;
}
</style>
