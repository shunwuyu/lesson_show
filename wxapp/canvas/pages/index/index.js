//index.js
//获取应用实例
const app = getApp()
import darwEffect from '../../lib/effect'

Page({
  data: {
    width: 0, //px 宽度
    scale: 1
  },
  onLoad () {
    wx.getSystemInfo({
      success: (res) => {
        let width = res.windowWidth
        this.setData({
          width,
          scale: width / 375
        })
      },
    });
    const canvasId = 'effect';
    const ctx = wx.createCanvasContext(canvasId);
    let { width, scale } = this.data
    let height = 768 / 2 * scale;
    // ctx.setFillStyle('red');
    // ctx.fillRect(10,10,150,75);
    // ctx.draw();
    let rain = darwEffect('rain', ctx, width, height, {amout: 100, speedFactor: 0.03})
    rain.run()


  }
})