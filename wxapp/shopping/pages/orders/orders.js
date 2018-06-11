//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hasAddress: false,
    address: {},
    orders:[
      {id:1,title:'新鲜芹菜 半斤',image:'/image/s5.png',num:4,price:3.40},
      {id:2,title:'素米 500g',image:'/image/s6.png',num:1,price:2.60}
    ]
  },
  onShow() {
    wx.getStorage({
      key: 'address',
      success:(res) => {
        // console.log(this);
        this.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },
  onReady() {
    this.getTotalPrice();
  },
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
    this.setData({
      total: total
    })
  },
  toPay() {
    wx.showModal({
      title: '提示',
      content: '本系统只做演示，支付系统已屏蔽',
      complete() {
        // wx.switchTab({
        //   url: '/page/component/user/user'
        // })
      }
    })
  }
})
