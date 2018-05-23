//index.js
//获取应用实例
import bsurl from '../../utils/bsurl.js';
console.log(bsurl);
const app = getApp()
Page({
  data: {
    thisday: (new Date()).getDate(),
    banner: [4],
    music:{},
    tabidx: 0,
    rec: {
      idx: 0,
      loading: false
    },
    playlist: {
      idx: 1, loading: false,
      list: {},
      offset: 0,
      limit: 20
    },
    catelist: {
        res: {},
        checked: {}
    },
    djlist: {
        idx: 2, loading: false,
        list: [],
        offset: 0,
        limit: 20
    },
    sort: {
      idx: 3, loading: false
    }
  },
  switchtab (e) {
    var that = this;
    var t = e.currentTarget.dataset.t;
    this.setData({
      tabidx: t
    });
    
    if (t == 1 && !this.data.playlist.loading) {
      this.gplaylist();
    }
  },
  gplaylist: function(isadd) {
    wx.request({
      url: bsurl + 'top/playlist',
      data: {
        limit: this.data.playlist.limit,
        offset: this.data.playlist.offset,
        type: this.data.catelist.checked.name
      },
      complete: (res) => {
        this.data.playlist.loading = true;
        if (!isadd) {
          this.data.playlist.list = res.data
        } else {

        }
        this.data.playlist.offset += res.data.playlists.length;
        this.setData({
          playlist: this.data.playlist
        })
      }
    })
  },  
  onShow: function() {
    // this.setData({
    //   music: app.globalData.curplay
    // })
    this.init();
  },
  init: function() {
    const rec = this.data.rec;
    // console.log(bsurl + 'banner');
    wx.request({
      url: bsurl + 'banner',
      data: {},
      success: (res) => {
        this.setData({
          banner: res.data.banners
        })
      }
    })
    wx.request({
      url: bsurl + 'playlist/catlist',
      complete: (res) => {
        this.setData({
          catelist: {
            isShow: false,
            res: res.data,
            checked: res.data.all
          }
        })
      }
    })
    const arrPersonalizedPromise = ['personalized', 'personalized/newsong', 'personalized/mv', 'personalized/djprogram'].map(item => {
      return new Promise((resolve, reject) => {
        wx.request({
          url: bsurl + item,
          data: {},
          success: (res) => {
            resolve(res.data.result)
          }
        })
      })
    });
    // console.log(arrPersonalizedPromise);
    Promise.all(arrPersonalizedPromise)
    .then(res => {
      rec.loading = true;
      rec.re = res;
      this.setData({
        rec
      })
    })
  }
})
