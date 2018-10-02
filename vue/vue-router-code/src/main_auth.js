import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import auth from './auth'
Vue.use(VueRouter)

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
