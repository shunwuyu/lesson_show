import { dateFormat } from '../../lib/utils'
import { jscode2session, getEmotionByOpenidAndDate, addEmotion } from '../../lib/api'
const app = getApp()
const globalData = app.globalData

Page({
  data: {
    activeEmotion: 'serene',
    todayEmotion: '',
    avatarUrl: globalData.avatarUrl,
    nickname: globalData.nickname,
    emotions: ['serene', 'hehe', 'ecstatic', 'sad', 'terrified'],
    colors: {
      serene: '#64d9fe',
      hehe: '#d3fc1e',
      ecstatic: '#f7dc0e',
      sad: '#ec238a',
      terrified: '#ee1aea'
    },
    daysStyle: [],
    auth: -1,

  },
  onLoad(options) {
    //console.log(dateFormat(new Date(), 'yyyy-MM'));
    this.setData({
      curMonth: dateFormat(new Date(), 'yyyy-MM')
    })
    this.getScope(this.getUserInfo, () => {
      this.setData({
        auth: 0
      })
    })
  },
  getScope(success, fail, name = 'scope.userInfo') {
    wx.getSetting({
      success: (res) => {
        // console.log(res.authSetting[name])
        if (res.authSetting[name]) {
          typeof success === 'function' && success()
        } else {
          typeof fail === 'function' && fail()
        }
      }
    })
  },
  getUserInfo() {
    if (!globalData.nickname || globalData.avatarUrl) {
      this._getUserInfo((res) => {
        this.setData({
          nickname: res.nickName,
          avatarUrl: res.avatarUrl
        })
        globalData.nickname = res.nickName
        globalData.avatarUrl = res.avatarUrl
      })
    }
    const that = this
    let openid = wx.getStorageSync('openid')
    // console.log(openid, 'ddd');
    function callback() {
      that.setData({
        auth: 1,
        openid
      })
      if (globalData.currentMonthData && globalData.currentMonthData.length) {
        const now = new Date()
      } else {
        that.setCalendarColor()
      }
    }
    if (openid) {
      callback()
    } else {
      this.getUserOpenId((res) => {
        openid = res.result.openid
        callback()
      }, () => {
        this.setData({
          auth: 0
        })
      })
    }
  },
  setCalendarColor(year, month) {
    year = year || new Date().getFullYear()
    month = month || new Date().getMonth() + 1
    // console.log(this.data.openid, year, month)
    getEmotionByOpenidAndDate(this.data.openid, year, month)
      .then((r) => {
        // console.log(r);
        const data = r.data || []
        globalData.currentMonthData = data
        this._setDayData(data, year, month)
      })
      .catch((e) => {
        console.log(e);
        wx.showToast({
          title: '加载已签数据失败，请稍后再试',
          icon: 'none',
          duration: 3000
        })
      })
  },
  getUserOpenId (success, fail) {
    wx.login({
      success: (res) => {
        // console.log(res.code);
        jscode2session(res.code).then((res) => {
          console.log(res);
          let { openid = '', session_key = '' } = res.result || {}
          if (openid && session_key) {
            wx.setStorage({
              key: 'openid',
              data: openid
            })
            typeof success === 'function' && success(res)
          } else {
            typeof fail === 'function' && fail()
          } 
        })
      }
    })
  },
  _setDayData(data, year, month) {
    const colors = this.data.colors
    // console.log(colors);
    const styles = []
    const now = new Date()
    const today = dateFormat(now)
    let todayEmotion = ''
    data.forEach((v) => {
      let ts = v.tsModified
      let date = new Date(ts)
      let day = date.getDate()
      if (today === dateFormat(date)) {
        todayEmotion = v.emotion || ''
      }
      styles.push({
        month: 'current',
        day,
        color: 'black',
        background: colors[v.emotion]
      })
    })
    this.setData({
      lastMonth: `${year}-${('00' + month).slice(-2)}`,
      showPublish: true,
      todayEmotion,
      daysStyle: styles
    })
  },
  _getUserInfo(cb = () => {}) {
    wx.getUserInfo({
      success: (res) => {
        // console.log(res.userInfo);
        cb(res.userInfo);
      }
    })
  },
  submitEmotion() {
    let {openid, activeEmotion, colors} = this.data
    addEmotion(openid, activeEmotion)
  },
  checkedColor(e) {
    let activeEmotion = e.currentTarget.dataset.emotion
    this.setData({
      activeEmotion
    })
  }
})