<template>
  <div style="display: inline-flex">
    <link-items></link-items>
    <menu-items></menu-items>
  </div>
</template>

<script>
import LinkItems from './LinkItems'
import MenuItems from './MenuItems/index'
export default {
  components: {
    LinkItems,
    MenuItems
  }
}
</script>
<style>
</style>
