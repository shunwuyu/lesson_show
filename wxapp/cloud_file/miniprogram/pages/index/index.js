const db = wx.cloud.database()
const userInfo = db.collection('userInfo')

Page({
  data: {
    userList: []
  },
  onLoad: function(options) {
    userInfo.get().then(res => {
      console.log(res);
      this.setData({
        userList: res.data
      })
    })
  },
  getUserInfo: function(result) {
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        userInfo.where({
          _openid: res.result.openId
        }).count().then(res => {
          console.log(result)
          if (res.total == 0) {
            userInfo.add({
              data: result.detail.userInfo
            }).then(res => {
              wx.navigateTo({
                url: '../add/add'
              })
            }).catch(err => {
              console.error(err)
            })
          } else {
            wx.navigateTo({
              url: '../add/add'
            })
          }
        })
      }
    })
  }
})