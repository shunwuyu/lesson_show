// pages/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btn_disabled: true,
    dorm: {
      name: '默认寝室',
      tip: {
        content: '研1529',
        color: 'green'
      }
    },
    amounts: [
      {
        value: 50,
        checked: false
      },
      {
        value: 100,
        checked: false
      },
      {
        value: 150,
        checked: false
      },
      {
        value: 200,
        checked: false
      },
      {
        value: 250,
        checked: false
      }
    ],
    supportSoter: true
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
    wx.setNavigationBarTitle({
        title: '充值'
    });
  },
  bindAmountChange (e) {
    // console.log(e);
    let amounts = this.data.amounts,
      val = parseInt(e.detail.value);
    for (let amout of amounts) {
      amout.checked = amout.value === val;
    }
    this.setData({
      amounts,
      btn_disabled: false
      // btn_disabled: this.btnIsDisabled()
    });
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