Page({
  onGotUserInfo(e) {
    // e.detail 跟 wx.getUserInfo()获取的用户信息是一样的
    const { encryptedData, iv } = e.detail;
  
    wx.login({
      timeout: 3000,
      success: res => {
        const code = res.code;

        wx.request({
          url: `http://localhost:8000/users/wxLogin`, // 我们的服务端地址
          method: 'POST',
          data: {
            code, encryptedData, iv
          },
          success: res => {
            // res.data 为服务端正确登录后签发的 JWT
            console.log(res.data)
            wx.setStorageSync('auth', res.data);
          }
        })
      }
    })
  }

})