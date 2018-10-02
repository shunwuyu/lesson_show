<template>
  <div>
    Main
    <click-component v-for="i in 5" :key="i" :index="i"/>
    <show-component></show-component>
  </div>
</template>
<script>
import ClickComponent from './click.vue'
import ShowComponent from './show.vue'
export default {
  components: {
    'click-component': ClickComponent,
    ShowComponent
  }
}
</script>
<style>

</style>
