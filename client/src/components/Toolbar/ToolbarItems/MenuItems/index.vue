<template>
  <div class="text-xs-center">
    <v-menu offset-y>
      <v-btn
        icon
        flat
        slot="activator"
        v-for="item in MenuItems"
        :key="item.title"
        @click="active(item.child)">
      <v-icon>{{ item.icon }}</v-icon> 
      </v-btn>
      <items 
        v-if="child"
        :child="child">
      </items>
    </v-menu>
  </div>
</template>

<script>
import Items from './Items'
export default {
  data: () => ({
    child: null,
    MenuItems: [
      { title: 'Settings', icon: 'settings', child: 'settings' }
    ]
  }),
  methods: {
    active (child) {
      this.child = child
    }
  },
  components: {
    Items
  }
}
</script>

<style>

</style>
