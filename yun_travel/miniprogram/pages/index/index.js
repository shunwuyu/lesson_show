wx.cloud.init()
const db = wx.cloud.database();
const command = db.command;
const util = require('../../utils/util.js')

Page({
  data: {
    ads: [],
    travels: []
  },
  onLoad: function() {
    db.collection("ads").get({
      success: res => {
        // console.log(res);
        this.setData({
          ads: res.data
        })
        wx.cloud.callFunction({
          name: "getTravelInfo",
          data: {
            count: 5,
            startIndex: 0
          },
          success: res => {
            console.log(res);
            const travelInfos = res.result.data;
            travelInfos.map(info => {
              info.add_time = util.formatTime(new Date(info.add_time), 3);
              return info;
            })
            this.setData({
              travels: res.result.data
            })
          },
          fail: err => {
            console.log(err);
          }
        })
      },
      fail: err => {
        console.log(err);
      }
    })
  }
})