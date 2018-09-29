import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '安装', component: () => import('./pages/install') },
    { path: '/bmap', name: '百度地图', component: () => import('./pages/bmap') }
  ]
})
