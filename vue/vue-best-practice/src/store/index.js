import Vue from 'vue';
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex); // this.$store 

// 初始状态 action 动作 -> mutation/reducer-> state的更新 
const state = {
  totalTime: 0,
  list: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})