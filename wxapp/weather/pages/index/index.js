//index.js
//获取应用实例
const app = getApp()
import { geocoder, getWeather, addEmotion } from '../../lib/api'

Page({
  data: {
    backgroundImage: '../../images/cloud.jpg',
    backgroundColor: '#62aadc',
    address: '定位中',
    lat: 40.056974,
    lon: 116.307689,
    paddingTop: 0,
    scale: 1
  },
  onLoad () {
    addEmotion('121212', 'sss')
    // wx.getSystemInfo({
    //   success: (res) => {
    //     let width = res.windowWidth;
    //     let scale = width / 375
    //     this.setData({
    //       width,
    //       scale,
    //       paddingTop: res.statusBarHeight + 12
    //     })
    //   }
    // })
    // this.getLocation();
  },
  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: this.updateLocation,
      fail: (e) => {
        this.openLocation()
      }
    })
  },
  updateLocation(res) {
    let {latitude: lat, longitude: lon, name} = res
    
    let data = {
      lat,
      lon
    }
    if (name) {
      data.address = name
    }
    // console.log(res);
    this.setData(data)
    this.getAddress(lat, lon, name)
  },
  openLocation() {
    wx.showToast({
      title: '检测到您未授权使用位置权限，请先开启哦',
      icon: 'none',
      duration: 3000
    }) 
  },
  getAddress(lat, lon, name) {
    wx.showLoading({
      title: '定位中',
      mask: true
    });
    let fail = (e) => {
      this.setData({
        address: name || '北京市海淀区西二旗北路' 
      });
      wx.hideLoading()
      //this.getWeatherData()
    }
    geocoder(
      lat,
      lon,
      (res) => {
        wx.hideLoading()
        let result = (res.data || {}).result
        // console.log(res);
        if (res.statusCode === 200 && result && result.address) {
          let { address, formatted_addresses, address_component } = result
          if (formatted_addresses && (formatted_addresses.recommend || formatted_addresses.rough)) {
            address = formatted_addresses.recommend || formatted_addresses.rough
          }
          let { province, city, district: county } = address_component
          this.setData({
            province,
            county,
            city,
            address: name || address
          })
          this.getWeatherData()
        }
      },
      fail
    )
  },
  getWeatherData(cb) {
    wx.showLoading({
      title: '获取数据中',
      mask: true
    })
    const fail = (e) => {
      wx.hideLoading()
      if (typeof cb === 'function') {
        cb()
      }
      wx.showToast({
        title: '加载失败，请稍后再试',
        icon: 'none',
        duration: 3000
      })
    }
    const {lat, lon, province, city, county} = this.data
    getWeather(lat, lon)
      .then((res) => {
        wx.hideLoading()
        if (typeof cb === 'function') {
          cb()
        }
        if (res.result) {
          this.render(res.result)
        } else {
          fail()
        }
      })
      .catch(fail)
  },
  render (data) {

  }
  //事件处理函数
})
