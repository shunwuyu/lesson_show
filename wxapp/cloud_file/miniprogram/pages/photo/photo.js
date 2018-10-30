// miniprogram/pages/photo/photo.js
const db = wx.cloud.database()
const photos = db.collection('photos')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    photos.doc(options.id).get({
      success: res => {
        this.setData({
          photo: res.data.image,
          id: options.id
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
    let id = this.data.id
    return {
      title: '我发现了一张好照片',
      path: 'pages/photo/photo?id=' + id,
      imageUrl: 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=18092914'
    }
  },
  downloadPhoto: function(event) {
    wx.cloud.downloadFile({
      fileID: this.data.photo,
      success: res => {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: res => {
            console.log('保存成功');
          },
          fail: err => {
            console.error(err)
          }
        })
      },
      fail: console.err
    })
  },
  downloadQRcode: function(event) {
    wx.cloud.callFunction({
      name: 'qrcode',
      success: res => {
        wx.cloud.downloadFile({
          fileID: res.result.fileID,
          success: res => {
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: res => {
                wx.showToast({
                  title: '保存成功',
                  icon: 'success'
                })
              }
            })
          }
        })
      }
    })
  },
  generateUrl: function(event) {
    wx.cloud.getTempFileURL({
      fileList: [this.data.photo],
      success: res => {
        // console.log(res.fileList[0]);
        wx.setClipboardData({
          data: res.fileList[0].tempFileURL,
          success: res2 => {
            console.log(res2)
          }
        })
      }
    })
  }
})