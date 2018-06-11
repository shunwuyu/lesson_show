//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    latitude: 28.714621,
    longitude: 115.82749,
    scale: 13,
    controls: [],
    markers: []
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onReady: function() {
    console.log('show');
    this.mapCtx = wx.createMapContext("ofoMap");
    this.movetoPosition();
  },
  onLoad: function () {
    // console.log('load');
    wx.getLocation({
      type: "gcj02",
      success: (res) => {
        console.log(res.latitude, res.longitude);

        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          controls: [{
            id: 1,
            iconPath: '/images/location.png',
            position: {
              left: 20,
              top: res.windowHeight - 80,
              width: 50,
              height: 50
            },
            clickable: true
          },
          {
            id: 2,
            iconPath: '/images/use.png',
            position: {
              left: res.windowWidth/2 - 45,
              top: res.windowHeight - 100,
              width: 90,
              height: 90
            },
            clickable: true
          },
          {
            id: 3,
            iconPath: '/images/warn.png',
            position: {
              left: res.windowWidth - 70,
              top: res.windowHeight - 80,
              width: 50,
              height: 50
            },
            clickable: true
          },
          {
            id: 4,
            iconPath: '/images/marker.png',
            position: {
              left: res.windowWidth/2 - 11,
              top: res.windowHeight/2 - 45,
              width: 22,
              height: 45
            },
            clickable: true
          },
          {
            id: 5,
            iconPath: '/images/avatar.png',
            position: {
              left: res.windowWidth - 68,
              top: res.windowHeight - 155,
              width: 45,
              height: 45
            },
            clickable: true
          }
          ]
        })
      }
    })

    wx.request({
      url: 'https://www.easy-mock.com/mock/59098d007a878d73716e966f/ofodata/biyclePosition',
      data: {},
      method: 'GET',
      success: (res) => {
        console.log(res.data.data);
        this.setData({
          markers: res.data.data
        })
      },
      fail: function(res) {
        wx.showToast({
          title: '请求失败',
          icon: 'error',
          duration: 2000
        })
      },
      complete: function(res) {

      }
    })
  },
  movetoPosition: function() {
    console.log('move')
    this.mapCtx.moveToLocation();
  },
  bindcontroltap: function(e) {
    switch(e.controlId) {
      case 1: this.movetoPosition();
      break;
      case 2:
      wx.scanCode({
        success: (res) => {
          wx.showLoading({
            title: '正在获取密码',
            mask: true
          })
        }
      })
      break;
      case 3: wx.navigateTo({
        url: '../warn/warn'
      });
      break;
      case 5: wx.navigateTo({
        url: '../my/my'
      });
      break;
      default: break;
    }
  },
  bindmarkertap: function(e) {
    let _markers = this.data.markers;
    let markerId = e.markerId;
    let currMaker = _markers[markerId];
    this.setData({
      polyline: [{
        points: [{
          longitude: this.data.longitude,
          latitude: this.data.latitude
        }, {
          longitude: currMaker.longitude,
          latitude: currMaker.latitude
        }],
        color: "#FF0000DD",
        width: 1,
        dottedLine: true
      }],
      scale: 18
    })
  }
})
