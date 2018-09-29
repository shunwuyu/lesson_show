// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Post from './Post.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import router from './router'


Vue.config.productionTip = false

const Home = { template: '<div>Home</div>'}

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/post/:id', component: Post
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
