import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
wx.cloud.init({
 env: 'codingdream-74b4e5'
})
const app = new Vue(App)
app.$mount()
