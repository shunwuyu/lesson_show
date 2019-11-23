const db = wx.cloud.database();
Page({
  data: {
    book: {}
  },
  onLoad: function (options) {
    console.log(options.id)
    db.collection('mybook').doc(options.id).get({
      success: res => {
        console.log(res.data);
        this.setData({
          book: res.data.result,
          id: options.id
        });
      },
      fail: err => {
        console.error(err);
      }
    })
    //console.log(options)
  },
  update: function (event) {
    console.log(event)
    db.collection('mybook').doc(this.data.id).update({
      data: {
        title: "局部更新测试2"
      },
      success: function (res) {
        console.log(res)
      }
    })
  },
  delete: function (event) {
    db.collection('mybook').doc(this.data.id).remove({
      success: function (res) {
        console.log(res)
      }
    })
  }
})