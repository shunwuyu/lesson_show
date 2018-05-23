// pages/music/music.js
const util = require('../../utils/util.js');
const musicUrl = getApp().globalData.musicBase;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: false,
    musicList: [],
    hasMore: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('down')
    this.getList('down');
  },
  getList(type) {
    this.setData({
      isLoading: true,
      hasMore: true
    })
    type === 'down' ? this.setData({
      id: 0
    }) : null;
    console.log(`${musicUrl}/api/channel/music/more`);
    util.$get(`${musicUrl}/api/channel/music/more`, { id: this.data.id })
    .then(res => {
      console.log(res);
      if (res.data.res === 0) {
        this.processData(type, res.data.data);
      }
    }).catch(e => {
      this.setData({
        isLoading: true,
        hasMore: false
      })
      wx.stopPullDownRefresh()
      wx.showToast({ title: `网络错误！`, duration: 1000, icon: "none" })
    })
  },
  processData (type, list) {
    if (list.length) {
      list.map(v => { // 转换一下时间
        return v.post_date = util.formatTime(new Date(v.post_date.replace(/-/g, '/')), 'yyyy-MM-dd')
      })
      if (type === 'up') { // 上拉处理
        this.setData({
          musicList: this.data.musicList.concat(list)
        })
      } else { // 下拉出来
        this.setData({
          musicList: list
        })
        wx.stopPullDownRefresh()
      }
      this.setData({
        id: list[list.length - 1].id,
        isLoading: false,
        hasMore: true
      })
    } else {
      if (type === 'down') {
        wx.showToast({ title: `没有数据`, duration: 1500, icon: "none" })
        this.setData({
          isLoading: false,
          hasMore: false
        })
      } else {
        this.setData({
          isLoading: false,
          hasMore: true
        })
      }
    }
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
    this.getList('down')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.isLoading) {
      return;
    }
    this.getList('up')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})