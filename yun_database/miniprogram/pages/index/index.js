//index.js
wx.cloud.init({
  env: 'codingdream-74b4e5'
})
const db = wx.cloud.database()
// const app = getApp()
const _ = db.command
const productsCollection = db.collection('products')

Page({
  data: {
    page: 0
  },
  onLoad: function() {
    productsCollection.get().then(res =>{
      this.setData({
        page: 0,
        products: res.data
      })
    })
  },
  onPullDownRefresh: function() {
    productsCollection.get().then(res => {
      this.setData({
        page: 0,
        products: res.data
      },res => {
        console.log("数据更新完成")
        wx.stopPullDownRefresh()
      })

    })
  },
  onReachBottom: function() {
    console.log('触底啦')
    let page = this.data.page + 20
    productsCollection.skip(page).get().then(res => {
      let new_data = res.data
      let old_data = this.data.products
      console.log(res.data);
      this.setData({
        products: old_data.concat(new_data),
        page: page
      }, res2 => {
        console.log(res2)
      })
    })
  }
})
