Page({
  navigateToAdd: function(event) {
    wx.navigateTo({
      url: '../add/add'
    })
  },
  navigateToIndex: function(event) {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  navigateToComplex: function(event) {
    wx.navigateTo({
      url: '../complex/complex'
    })
  }
})