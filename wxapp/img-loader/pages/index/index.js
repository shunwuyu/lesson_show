const ImgLoader = require('../../components/img-loader/img-loader.js');
const imgUrlThumbnail = 'http://storage.360buyimg.com/mtd/home/lion1483683731203.jpg';
const imgUrlOriginal = 'http://storage.360buyimg.com/mtd/home/lion1483624894660.jpg';
Page({
  data: {
    msg: '',
    imgUrl: ''
  },
  onLoad () {
    this.imgLoader = new ImgLoader(this)
  },
  loadImage () {
    this.setData({
      msg: '大图正在拼命加载..',
      imgUrl: imgUrlThumbnail
    })
    this.imgLoader.load(imgUrlOriginal, (err, data) => {
      console.log('图片加载完成', err, data.src);
      this.setData({
        msg: '大图加载完成~'
      })

      if (!err)
        this.setData({ imgUrl: data.src })
    })
  }
})