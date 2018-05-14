//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Welcome to the Summoner’s Rift',
    icon: "",
    nickname: "titus"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getAvatarData()
  },
  getAvatarData: function() {
    var _this = this
    wx.request({
      url: 'http://lolapi.games-cube.com/GetUserIcon',
      data: {
        iconid: 4
      },
      header: {
        'DAIWAN-API-TOKEN': app.globalData.accessToken
      },
      success: function(res) {
        _this.setData({
          icon: res.data['data'][0]['return']
        })
      },
      fail: function() {
        // _this.showError()
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
