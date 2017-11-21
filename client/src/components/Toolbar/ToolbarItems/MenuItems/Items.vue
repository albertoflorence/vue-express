<template>
  <v-list v-if="child">
    <v-list-tile
      dense class="pt-0"
      v-for="item in Items[child]"
      :key="item.title"
      @click.native="item['action'] ? item.action() : null"
      :to="item['link'] ? item.link : null">
      <v-list-tile-action v-if="item.icon">
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          {{ item.title }}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile> 
  </v-list>
</template>

<script>
export default {
  props: ['child'],
  data: () => ({
    Items: {
      settings: [
        { title: 'Configuration', icon: 'settings', link: {name: 'user-settings'} }
      ]
    }
  })
}
</script>

<style>

</style>
