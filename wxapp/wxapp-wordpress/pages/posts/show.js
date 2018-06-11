// pages/posts/show.js
import {
  API_DETAIL
} from '../../config/api';

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    title: '',
    author: {},
    article: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id;
    const url = `${API_DETAIL}/${id}`;
    wx.request({
      url: API_DETAIL,
      success: (res) => {
        let data = app.towxml.toJson(res.data.data.content, 'html');
        this.setData({
          'isLoading': false,
          'author': res.data.data.author,
          'title': res.data.data.title,
          'article': data
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