// miniprogram/pages/complex/complex.js
const db = wx.cloud.database()
const _ = db.command
const productsCollection = db.collection('products')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 'count'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  simple: function(event) {
    productsCollection.get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  red: function(event) {
    productsCollection.where({
      color: "red"
    }).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  lt: function(event) {
    productsCollection.where({
      price: _.gt(50)
    }).get().then(res => {
      console.log(res);
      this.setData({
        products: res.data
      })
    })
  },
  in: function(event) {
    productsCollection.where({
      view: _.in([4,5,6])
    }).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  and: function(event) {
    productsCollection.where({
      view: _.gt(1).and(_.lt(5
      ))
    }).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  limit: function(event) {
    productsCollection.limit(10).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  orderBy: function(event) {
    productsCollection
      .orderBy('view', 'asc')
      .get().then(res => {
        this.setData({
          products: res.data
        })
      })
  },
  count: function(event) {
    productsCollection.where({
      view: 4
    }).count().then(res => {
      console.log(res.total);
      this.setData({
        count: res.total
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})