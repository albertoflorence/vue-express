<template>
<v-container>
  <v-layout>
    <v-flex>
      <v-list>
        <v-list-tile
          dense class="pt-0"
          v-for="item in Items"
          @click="itemChoose(item.name)"
          :key="item.name">
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
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data: () => ({
    Items: [
        { title: 'Overview', icon: 'account_box', name: 'overview' },
        { title: 'Password', icon: 'vpn_key', name: 'password' },
        { title: 'Email', icon: 'email', name: 'email' }
    ]
  }),
  methods: {
    itemChoose (itemName) {
      this.$emit('itemChoose', itemName)
    }
  }
}
</script>

<style>

</style>
