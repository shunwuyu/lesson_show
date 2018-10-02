import Vue from 'vue'
import Vuex from 'vuex';
import playing from './modules/playing'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    playing
  }
})
