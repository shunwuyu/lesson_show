import Card from '../../palette/card.js';
import ImageExample from '../../palette/image_example.js';

Page({
  imagePath: '',
  data: {
    template: {}
  },
  onImgOK(e) {
    this.imagePath = e.detail.path;
    console.log(e);
  },
  saveImage() {
    wx.saveImageToPhotosAlbum({
      filePath: this.imagePath
    })
  },
  onReady: function() {
    this.setData({
      template: new ImageExample().palette(),
    });
  },
});