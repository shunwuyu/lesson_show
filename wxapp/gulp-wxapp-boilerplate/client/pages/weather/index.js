import { drawEffect } from '../../lib/util'
import { geocoder } from '../../lib/api'
import { getWeather } from '../../lib/api-mock'
let effectInstance
const EFFECT_CANVAS_HEIGHT = 768 / 2
const CHART_CANVAS_HEIGHT = 272 / 2

Page({
  data: {
    backgroundImage: '../../images/cloud.jpg',
    backgroundColor: '#62aadc',
    width: 375,
    scale: 1,
    address: '定位中',
    lat: 40.056974,
    lon: 116.307689
  },
  onLoad () {
    wx.getSystemInfo({
      success: (res) => {
        let width = res.windowWidth
        let scale = width / 375
        // console.log(scale * res.statusBarHeight*2+24)
        this.setData({
          width,
          scale,
          paddingTop: res.statusBarHeight + 12
        })
      }
    })
    const pages = getCurrentPages()
    // console.log(pages);
    const currentPage = pages[pages.length - 1]
    const query = currentPage.options
    console.log(query);
    if (query && query.address && query.lat && query.lon) {

    } else {
      this.getLocation();
    }
  },
  getLocation () {
    wx.getLocation({
      type: 'gcj02',
      success: this.updateLocation,
      fail: (e) => {
        // console.log(e)
        this.openLocation()
      }
    })
  },
  updateLocation(res) {
    let {latitude: lat, longitude: lon, name} = res
    // console.log(res);
    let data = {
      lat,
      lon
    }
    if (name) {
      data.address = name
    }
    this.setData(data)
    this.getAddress(lat, lon, name)
  },
  getWeatherData (cb) {
    wx.showLoading({
      title: '获取数据中',
      mask: true
    })
    const fail = (e) => {
      wx.hideLoading()
      if (typeof cb === 'function') {
        cb()
      }
      // console.log(e.message, e)
      wx.showToast({
        title: '加载失败，请稍后再试',
        icon: 'none',
        duration: 3000
      })
    }
    const {lat, lon, province, city, county} = this.data
    console.log(lat, lon);
    getWeather(lat, lon)
      .then((res) => {
        console.log(res);
        wx.hideLoading()
        this.render(res.result)
        // if (typeof cb === 'function') {
        //   cb()
        // }
        // if (res.result) {
        //   this.render(res.result)
        // } else {
        //   fail()
        // }
      })
      .catch(fail)

  },
  getAddress(lat, lon, name) {
    wx.showLoading({
      title: '定位中',
      mask: true
    });
    let fail = (e) => {
      // console.log(e)
      this.setData({
        address: name || '北京市海淀区西二旗北路'
      })
      wx.hideLoading()

      // this.getWeatherData()
    }
    geocoder(
      lat,
      lon,
      (res) => {
        wx.hideLoading()
        let result = (res.data || {}).result
        console.log(1, res, result)

        if (res.statusCode === 200 && result && result.address) {
          let {address, formatted_addresses, address_component} = result
          if (formatted_addresses && (formatted_addresses.recommend || formatted_addresses.rough)) {
            address = formatted_addresses.recommend || formatted_addresses.rough
          }
          let {province, city, district: county} = address_component
          this.setData({
            province,
            county,
            city,
            address: name || address
          })
          this.getWeatherData()
        } else {
          //失败
          fail()
        }
      },
      fail
    )

  },
  render(data) {
    console.log('aa')
    // if (effect && effect.name) {
      effectInstance = drawEffect('effect', 'rain', width, EFFECT_CANVAS_HEIGHT * scale, 100)
    // }
  }
})
