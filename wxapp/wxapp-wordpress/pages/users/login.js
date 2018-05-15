// pages/users/login.js
import {
  API_LOGIN
} from '../../config/api'

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    message: '',
    bind: false,
    showMessage: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  onInputUsername (e) {
    this.setData({
      username: e.detail.value
    })
  },
  onInputPassword (e) {
    this.setData({
      password: e.detail.value
    })
  },
  onTapRegisterButton (e) {
    wx.navigateTo({
      url: '/pages/users/register?bind=true'
    })
  },
  onTapSubmitButton () {
    wx.request({
      url: API_LOGIN,
      method: 'POST',
      data: {
        username: this.data.username,
        password: this.data.password
      },
      success: (response) => {
        // this.setData({
        //   message: '用户名不对',
        //   showMessage: true
        // })
        wx.switchTab({
          url: '/pages/users/show'
        })
      }
    })
  }
})