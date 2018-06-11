// pages/record/record.js
const app = getApp();
import util from '../../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    records: [],
    total: 0
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
      title: '消费记录'
    });
    let dateArr = util.getRecentDate();
    this.setData({
      dateArr,
      startDate: dateArr[0],
      endDate: dateArr[1],
      startPickerEnd: dateArr[1],
      endPickerStart: dateArr[0]
    })
  },
  bindDateChange (e) {
    const type = e.currentTarget.dataset.type;
    // console.log(type);
    if (type === 'startPicker') {
      this.setData({
        startDate: e.detail.value,
        endPickerStart: e.detail.value
      })
    } else {
      this.setData({
          endDate: e.detail.value,
          startPickerEnd: e.detail.value
      });
    }
    
  },
  bindSubmit () {
    const records = [
      {
        amount: 6.5,
        area: '南区食堂',
        platform: '精品套餐',
        time: '06-08 12:09:41'
      }, {
        amount: 9.5,
        area: '西区食堂',
        platform: '客家小炒',
        time: '06-09 12:19:42'
      }
    ];
    let total = 0;
    for (let i = 0; i < records.length; i++) {
      total += records[i].amount;
    }
    this.setData({
      total: total,
      records: [
        {
          amount: 6.5,
          area: '南区食堂',
          platform: '精品套餐',
          time: '06-08 12:09:41'
        }, {
          amount: 9.5,
          area: '西区食堂',
          platform: '客家小炒',
          time: '06-09 12:19:42'
        }
      ]
    })
    
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