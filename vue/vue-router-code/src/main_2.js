// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import router from './router'

Vue.config.productionTip = false

const Home = { template: '<div><h2>Home</h2></div>'}
const About = { template: '<div><h2>About</h2></div>' }
const Users = {
  template: `
    <div>
      <h2>Users</h2>
      <router-view></router-view>
    </div>
  `
}
const User = { template: '<div>{{$route.params.username}}</div>'}
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/about', component: About
    },
    {
      path: '/users', component: Users,
      children: [
        {
          path: ':username',
          name: 'user',
          component: User
        }
      ]
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
