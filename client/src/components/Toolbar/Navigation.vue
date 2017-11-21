<template>
  <v-navigation-drawer
    fixed
    app
    clipped
    disable-route-watcher
    disable-resize-watcher
    v-model="activator">
    <v-list>
      <v-list-tile 
        dense class="pt-0"
        v-for="item in items"
        :key="item.title"
        @click="test">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.title }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile> 
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: [ 'activator' ],
  data: () => ({
    items: [
      {title: 'test', icon: 'person', link: {name: ''}}
    ]
  }),
  methods: {
    test () {
      console.log('lol')
    }
  }
}
</script>

<style>

</style>
