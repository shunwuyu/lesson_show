// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './filters';
import './mixin';
import router from './router'
import store from './store'

import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
Vue.use(Mint)

import './stylus/index.styl'
import './stylus/themes/default.styl'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

// 异步注册全局组件
Vue.component('fallback', resolve => resolve(require('./components/fallback')))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
