const db = wx.cloud.database()
const userInfo = db.collection('userInfo')
const photos = db.collection('photos')

Page({
  onLoad: function(options) {
    wx.showLoading({
      title: '数据加载中...'
    })
    userInfo.where({
      _openid: options.id
    }).get().then(res => {
      photos.where({
        _openid: options.id
      }).get().then(res2 => {
        this.setData({
          userInfo: res.data[0],
          photos: res2.data
        }, res => {
          wx.hideLoading()
        })
      })
    })
  }
})