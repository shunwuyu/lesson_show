//index.js
//获取应用实例
var wxCharts = require('../../utils/wxcharts.js');
const app = getApp()

Page({
  data: {
    userInfo: {},
    userName: 'shunwuyu',
    following: [],
    follow: [],
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  backInput: function () {
    wx.navigateTo({
      url: '../user/user',
    })
  },
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: "userName",
      success (res) {
        console.log(res);
        that.setData({
          userName: res.data
        });
        that.getUserInfo(); 
      }
    })
    // this.getUserInfo();
    // try {
    //   username = wx.getStorageSync('userName')
    // } catch(e) {
    //   console.error('getuserName failed')
    // }
  },
  onShow () {
    
  },
  getUserInfo: function(e) {
    var windowWidth = 320;
    console.log('https://api.github.com/users/' + this.data.userName)
    wx.request({
      url: 'https://api.github.com/users/' + this.data.userName,
      success: (res) => {
        this.setData({
          userInfo: res.data
        })
      }
    });
    wx.request({
      url: `https://api.github.com/users/${this.data.userName}/following`,
      success: (res) => {
        console.log(res);
        this.setData({
          following: res.data
        })
      } 
    })
    wx.request({
      url: `https://api.github.com/users/${this.data.userName}/followers`,
      success: (res) => {
        console.log(res);
        this.setData({
          follow: res.data
        })
      } 
    })
    console.log()
    wx.request({
      url: `https://api.github.com/users/${this.data.userName}/repos`,
      success: (res) => {
        console.log(res);
        let columns = [];
        let langs = {};
        let repos = [];
        let tempColData = [];
        let tempCategories = [];
        let tempRepoSize = [];
        // console.log(res.data);
        for (let item of res.data) {
          if (item.language) {
            if (!columns.includes(item.language)) {
              columns.push(item.language);
              langs.push({
                name: item.language,
                data: 1
              })
            } else {
              for (let i = 0; i < langs.length; i++) {
                if (langs[i].name === item.language) {
                  langs[i].data++;
                }
              }
            }
          }
        }
        for (var key in langs) {
          repos.push({
            "name": key,
            "data": langs[key]
          });
        }
        for (let item of res.data) {
          tempColData.push(item.stargazers_count);
          tempCategories.push(item.name.length > 10 ? item.name.substring(0, 10) + '...' : item.name),
          tempRepoSize.push({
            "name": item.name,
            "data": item.size
          });
        }
        // console.log('fdfdfd', tempCategories);
        let pieChart=new wxCharts({
          canvasId: 'starts',
          type: 'column',
          animation: true,
          categories: tempCategories,
          series: [{
            name: '仓库Starts柱状图',
            data: tempColData,
          }],
          yAxis: {
            title: '数量',
            min: 0
          },
          xAxis: {
            disableGrid: false,
            type: 'calibration'
          },
          extra: {
            column: {
              width: 15
            }
          },
          width: windowWidth,
          height: 300,
        });
        let rangChart=new wxCharts({
          animation: true,
          canvasId: 'ringCanvas',
          type: 'ring',
          extra: {
            ringWidth: 20,
          },
          title: {
            name: '仓库大小',
            color: '#000',
            fontSize: 14
          },
          series: tempRepoSize,
          disablePieStroke: true,
          width: windowWidth,
          height: 300,
          dataLabel: true,
          legend: true,
          background: '#f5f5f5',
          padding: 0
        });
        console.log(langs);
        let colChart=new wxCharts({
          animation: true,
          canvasId: 'pieCanvas',
          type: 'pie',
          series: langs,
          width: windowWidth,
          height: 300,
          dataLabel: true,
        })
      } 
    })
  }
})
