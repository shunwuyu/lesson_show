// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import router from './router'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/'
    },
    {
      path: '/params/:foo/:bar'
    },
    {
      path: '/optional-params/:foo?'
    },
    {
      path: '/params-with-regex/:id(\\d+)'
    },
    {
      path: '/asterisk?*'
    },
    { path: '/optional-group/(foo/)?bar' }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
