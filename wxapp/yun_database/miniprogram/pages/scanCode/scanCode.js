Page({
  scanCode: function (event) {
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['barCode'],
      success: res => {
        wx.cloud.callFunction({
          name: 'bookinfo',
          // 传递给云函数的参数
          data: {
            isbn: res.result
          },
          success: res => {
            var bookString = res.result;
            // console.log(JSON.parse(bookString))
            const db = wx.cloud.database()
            const book = db.collection('mybook')
            // set price , shop 
            db.collection('mybook').add({
              data: JSON.parse(bookString)
            }).then(res => {
              console.log(res)
            }).catch(err => {
              console.log(err)
            })
          },
          fail: err => {
            console.error(err)
          }
        })
      },
      fail: err => {
        console.log(err);
      }
    });
  }
})