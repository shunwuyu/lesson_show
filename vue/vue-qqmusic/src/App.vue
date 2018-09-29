<template>
  <div id="app">
    <!-- {{ 65 | timeFormat }}
    <fallback/>
    <button @click="playMusic()">播放</button> -->
    <router-view/>
    <play-fixed></play-fixed>
  </div>
</template>

<script>
import playFixed from '@/components/playFixed'
import { mapState } from 'vuex';
import store  from './store';

export default {
  name: 'App',
  data () {
    return {
      prevRoutes: []
    }
  },
  components: {
    'play-fixed': playFixed
  },
  computed: {
    ...mapState('transition', ['transitionName'])
  },
  watch: {
    $route(to, from) {
      // store.commit('transition/setTransition', 'turn-on');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
