<template>
  <v-container>
    <v-layout>
      <v-flex xs3><menu-items v-on:itemChoose="chosen"></menu-items></v-flex>
      <v-flex xs8>
        <overview v-if="menuItem === 'overview'"></overview>        
        <change-email v-if="menuItem === 'email'"></change-email>
        <change-password v-if="menuItem === 'password'"></change-password>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MenuItems from './Menu'
import Overview from './Account/Overview'
import ChangeEmail from './Account/ChangeEmail'
import ChangePassword from './Account/ChangePassword'
export default {
  data: () => ({
    menuItem: 'overview'
  }),
  methods: {
    chosen (itemName) {
      this.menuItem = itemName
    }
  },
  components: {
    MenuItems,
    Overview,
    ChangeEmail,
    ChangePassword
  }
}
</script>

<style>

</style>
