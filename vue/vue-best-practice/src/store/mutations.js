import * as types from './mutation-types'
export default {
  [types.SAVE_PLAN] (state, plan) {
    const avatar = 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256';
    
    state.list.push(
      Object.assign({name: '二哲', avatar: avatar}, plan)
    );
  },
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + ~~time; 
  }
}