<template>
  <div style="display: inline-flex">
    <router-link
      class="mr-5"
      tag="div"
      v-for="item in menuItems"
      :key="item.title"
      :to="item.link"
      @click.native="item['action'] ? item.action() : null"
      style="cursor: pointer">
      <v-icon>{{ item.icon }}</v-icon>
      <div class="caption grey-text">{{ item.title  }}</div>
    </router-link>
  </div>
</template>

<script>

export default {
  computed: {
    menuItems () {
      return this.$store.getters.isAuthenticated
      ? [
          {title: 'Loggout', icon: 'exit_to_app', link: { name: 'home' }, action: this.loggout}
      ]
      : [
          {title: 'Login', icon: 'person', link: { name: 'auth' }}
      ]
    }
  },
  methods: {
    loggout () {
      this.$store.dispatch('signOut')
    }
  }
}
</script>
<style>
</style>
