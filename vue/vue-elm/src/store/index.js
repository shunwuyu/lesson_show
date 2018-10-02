import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  userInfo: null,
  geohash: ''
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
