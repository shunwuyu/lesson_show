Page({
  school: function(res) {
    console.log('调用 School')
    wx.cloud.callFunction({
      name: 'tcbRouter',
      data: {
        $url: "school"
      }
    }).then(res => {
      console.log(res);
    })
  },
  user: function(res) {
    wx.cloud.callFunction({
      name: "tcbRouter",
      data: {
        $url: "user"
      }
    }).then(res => {
      console.log(res)
    })
  }
})