<template>
  <div class="spacing">
    <navigation :activator="nav"></navigation>
    <v-toolbar dense fixed app clipped-left :dense="false">
      <v-toolbar-side-icon @click.stop="nav = !nav" ></v-toolbar-side-icon>
      <v-toolbar-title 
        class="mr-5">
        <router-link
          :to="{name: 'home'}"
          tag="span"
          style="cursor: pointer">
          Padrao
        </router-link>
      </v-toolbar-title>
      <search/>
      <v-spacer></v-spacer>
      <toolbar-items></toolbar-items>
    </v-toolbar>  
  </div>
</template>

<script>
import Search from './Search'
import ToolbarItems from './ToolbarItems/index'
import Navigation from './Navigation'
export default {
  name: 'app-toolbar',
  data: () => ({
    nav: false
  }),
  components: {
    Search,
    ToolbarItems,
    Navigation
  }
}
</script>

<style scoped>
 .spacing {
   margin-bottom: 70px;
 }
</style>
