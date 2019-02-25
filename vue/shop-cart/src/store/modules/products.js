import shop from '../../api/shop';

const state = {
  all: [] //所有商品清单
} 

const actions =  {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products);
    })
  }
}
// 改变
const mutations = {
  setProducts (state, products) {
    state.all = products
  }
}

export default {
  namespaced: true, //分支的名称
  actions,
  mutations,
  state
}