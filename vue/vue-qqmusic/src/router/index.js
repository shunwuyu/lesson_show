import Vue from 'vue'
import Router from 'vue-router'
import { Indicator } from 'mint-ui'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component(resolve) {
        require(['@/pages/index'], resolve)
      }
    }
  ]
})

export default router;
