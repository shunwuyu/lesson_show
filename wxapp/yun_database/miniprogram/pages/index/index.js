const db = wx.cloud.database()
const book = db.collection('mybook')
const _ = db.command

Page({
  data: {
    book_list:[]
  },
  onLoad: function (options) {
    db.collection('mybook').get({
        success: res => {
          this.setData({
            book_list:res.data
          })
        }
      })
  },
  viewItem (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../bookDetail/bookDetail?id='+id
    });
  }
})