// miniprogram/pages/publish/publish.js
const app = getApp();
const util = require("../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowWidth: app.globalData.systemInfo.windowWidth,
    pics: [],
    picCount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData);
    this.setData({
      pics: app.globalData.pics,
      picCount: app.globalData.pics.length
    })
  },

  formSubmit: function(e) {
    wx.showLoading({
      title: "正在提交..."
    });
    wx.cloud.callFunction({
      name: "submitTravel",
      data: {
        summary: e.detail.value.summary,
      },
      success: res => {
        wx.cloud.callFunction({
          name: "submitPics",
          data: {
            travelId: res.result._id,
            pics: this.data.pics
          },
          success: res => {
            wx.switchTab({
              url: '../travel/travel'
            });
            wx.hideLoading();
          }
        })
      }
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