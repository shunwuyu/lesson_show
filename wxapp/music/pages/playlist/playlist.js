// pages/playlist/playlist.js
import bsurl from '../../utils/bsurl.js';
import id2Url from '../../utils/base64md5.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    curplay: {},
    cover: '',
    music: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: bsurl + 'playlist/detail',
      data: {
        id: options.pid,
        limit: 1000
      },
      success: (res) => {
        var canplay = [];
        // console.log(res.data);
        for (let i = 0; i < res.data.playlist.tracks.length; i++) {
          if (res.data.privileges[i].st >= 0) {
            canplay.push(res.data.playlist.tracks[i])
          }
        }
        this.setData({
          list: res.data,
          canplay: canplay,
          toplist: (options.from == 'stoplist'?true:false),
          cover: id2Url.id2Url('' + (res.data.playlist.coverImgId_str || res.data.playlist.coverImgId))
        });
        wx.setNavigationBarTitle({
          title: res.data.playlist.name,
        })
      },
      fail: (res) => {
        wx.navigateBack({
          delta: 1
        })
      }
    });
  },
  playmusic: function(event) {
    let music = event.currentTarget.dataset.idx;
    let st = event.currentTarget.dataset.st;
    if (st * 1 < 0) {
      wx.showToast({
        title: '歌曲已下架',
        icon: 'success',
        duration: 2000
      });
      return;
    }
    music = this.data.list.playlist.tracks[music];
    this.setplaylist(music, event.currentTarget.dataset.idx)
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