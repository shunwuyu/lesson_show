// miniprogram/pages/my/my.js
const util = require("../../utils/util.js")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting["scope.userInfo"]) {
          console.log(res.authSetting);
          wx.getUserInfo({
            success: res => {
              // console.log(res.userInfo);
              this.setData({
                userInfo: res.userInfo,
              });
              this.relatedUser();
            },
          });
        }
      },
    });
  },
  relatedUser: function() {

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
  publishTravel: function(e) {
    wx.chooseImage({
      count: 6,
      sizeType: ['album', 'camera'],
      success: function(res) {
        wx.showLoading({
          title: "图片上传中"
        });
        const tempFilePaths = res.tempFilePaths;
        let pics = [];
        const promise = new Promise((resolve, reject) => {
          let promiseArray = [];
          for (let i = 0; i < tempFilePaths.length; i++) {
            const cloudPath = util.formatTime(new Date, 4) + i.toString() + util.getFileExtention(tempFilePaths[i]);
            const promiseUpload = wx.cloud.uploadFile({
              filePath: tempFilePaths[i],
              cloudPath
            });
            promiseArray.push(promiseUpload);
          }
          Promise.all(promiseArray).then(res => {
            resolve(res)
          })
        });
        promise.then(res => {
          for (let i = 0; i < res.length; i++) {
            pics.push(res[i].fileID);
          }
          app.globalData.pics = pics;
          console.log(app.globalData);
          wx.hideLoading();
          wx.navigateTo({
            url: '../publish/publish'
          });
        }).catch(err => {
          console.log(err);
        })
      }
    })
  }
})