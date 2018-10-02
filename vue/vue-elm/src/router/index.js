import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('@/page/home/home')
const login = () => import('@/page/login/login')
const city = () => import('@/page/city/city')
const msite = () => import('@/page/msite/msite')
const food = () => import('@/page/food/food')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/city/:cityid',
      component: city
    },
    {
      path: '/msite',
      component: msite
    },
    {
      path: '/food',
      component: food
    }
  ]
})
