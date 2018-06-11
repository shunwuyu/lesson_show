//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    status: 1,
    addShow: false,
    focus: false,
    addText: '',
    lists: [],
    curLists: [],
    delBtnWidth: 120
  },
  onLoad: function() {
    var _this = this
    wx.getStorage({
      key: 'lists',
      success: function(res) {
        console.log(res.data);
        _this.setData({
          lists: res.data,
          curLists: res.data
        })
      }
    })
    // wx.getStorage()
    if (app.globalData.userInfo) {
      // console.log(app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    // console.log(app.globalData.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  addTodoShow: function() {
    this.setData({
      addShow: true,
      focus: true
    })
  },
  setInput: function(e) {
    this.setData({
      addText: e.detail.value
    })
  },
  addTodo: function() {
    if (!this.data.addText.trim()) {
      return
    }
    var temp = this.data.lists
    var addT = {
      id: new Date().getTime(),
      title: this.data.addText,
      status: '0'
    }
    temp.push(addT)
    this.showCur(temp)
    this.addTodoHide()
    wx.setStorage({
      key: "lists",
      data: temp
    })
    wx.showToast({
      title: '添加成功!',
      icon: 'success',
      duration: 1000
    });
  },
  addTodoHide: function() {
    this.setData({
      addShow: false,
      focus: false,
      addText: ''
    })
  },
  showCur: function(data) {
    if (this.data.status === '1') {
      this.setData({
        lists: data,
        curLists: data
      })
    } else {
      this.setData({
        lists: data,
        curLists: data.filter(item => +item.status === (this.data.status - 2)) 
      })
    }
  },
  changeTodo: function(e) {
    var _this = this
    var item = e.currentTarget.dataset.item
    var temp = _this.data.lists
    temp.forEach(el => {
      if (el.id === item) {
        if (el.status == '0') {
          el.status = '1'
          _this.showCur(temp)
          wx.setStorage({
            key: "lists",
            data: temp
          })
          wx.showToast({
            title: '已完成任务',
            icon: 'success',
            duration: 1000
          })
        }
      }
    })
  },
  showStatus: function(e) {
    var st = e.currentTarget.dataset.status
    if (this.data.status === st) return
    if (st == '1') {
      this.setData({
        status: st,
        curLists: this.data.lists
      })
      return;
    }
    this.setData({
      status: st,
      curLists: this.data.lists.filter(item => +item.status === st -2)
    })
  },
  touchS: function(e) {
    if (e.touches.length === 1) {
      this.setData({
        startX: e.touches[0].clientX
      })
    }
  },
  touchM: function(e) {
    var _this = this
    if (e.touches.length === 1) {
      var moveX = e.touches[0].clientX
      var disX = _this.data.startX - moveX
      var delBtnWidth = _this.data.delBtnWidth
      var txtStyle = ''
      if (disX === 0 || disX < 0) {
        txtStyle = 'left: 0'
      } else if (disX > 0) {
        txtStyle = 'leftx:-' + disX + 'px'
        if (disX >= delBtnWidth) {
          txtStyle = 'left:-' + delBtnWidth + 'rpx'
        }
      }
      var index = e.currentTarget.dataset.index;
      var list = _this.data.curLists;
      list[index].txtStyle = txtStyle;
      this.setData({
        curLists: list
      })
    }
  },
  touchE: function(e) {
    var _this = this
    if (e.changedTouches.length === 1) {
      var endX = e.changedTouches[0].clientX
      var disX = _this.data.startX - endX
      var delBtnWidth = _this.data.delBtnWidth
      var txtStyle = disX > delBtnWidth / 2 ? 'left:-' + delBtnWidth + 'rpx': 'left:0'
      var index = e.currentTarget.dataset.index;
      var list = _this.data.curLists
      list[index].txtStyle = txtStyle
      _this.setData({
        curLists: list
      })
    }
  },
  delTodo: function(e) {
    var _this = this
    var item = e.currentTarget.dataset.item
    var temp = _this.data.lists
    temp.forEach((el, index) => {
      if (el.id === item) {
        temp[index].txtStyle = 'left:0'
        wx.showModal({
          title: '',
          content: '您确定要删除吗？',
          onfirmText: '确定',
          cancelText: '考虑一下',
          success: function(res) {
            if (res.confirm) {
              temp.splice(index, 1);
              _this.showCur(temp)
              wx.setStorage({
                key: "lists",
                data: temp
              })
            }
          }
        })
      } else {
        _this.showCur(temp)
        return console.log('不操作')
      }
    })
  }
})
