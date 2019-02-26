import * as types from './mutation-types';

export default {
  savePlan({ commit }, plan) {
    commit(types.SAVE_PLAN, plan);
  },
  addTotalTime({ commit }, time) {
    commit(types.ADD_TOTAL_TIME, time);
  }
}