import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/home', 'pages/classify', 'pages/shop_cart', 'pages/info'],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Mall',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: false,
      backgroundColor: "#EFEFEF"
    },
    tabBar: {
      "color": "#999999",
      "selectedColor": "#ff6a3c",
      "backgroundColor": "#ffffff",
      "borderStyle": "black",
      "list": [{
        "pagePath": "pages/home",
        "text": "首页",
        "iconPath": "images/icon_home.png",
        "selectedIconPath": "images/icon_home_active.png"
      }, {
        "pagePath": "pages/classify",
        "text": "分类",
        "iconPath": "images/icon_classify.png",
        "selectedIconPath": "images/icon_classify_active.png"
      }, {
        "pagePath": "pages/shop_cart",
        "text": "购物车",
        "iconPath": "images/icon_shop_cart.png",
        "selectedIconPath": "images/icon_shop_cart_active.png"
      }, {
        "pagePath": "pages/info",
        "text": "我",
        "iconPath": "images/icon_info.png",
        "selectedIconPath": "images/icon_info_active.png"
      }]
    }
  }
}
