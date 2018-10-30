[source](https://juejin.im/book/5b70f101e51d456669381803/section/5b70f587518825612b15bd95)

- Gulp 

小程序云开发， 官方提供的SCF-Cli本地测试云函数
不用上传到云端，

- 雨雪效果的粒子系统
  绘图API在实时天气模块上做一个雨雪效果
  与Canvas有很大区别
  canvas-id   let ctx = wx.createCanvasContext('test')
  ctx.draw() 消耗性能
  rpx => px 转化  绘图内部尺

- 粒子系统设计思路
  火雾云雪尘埃烟气
  基类和子类组成
  Particle 基类  run stop clear
  _init() 子类提供
  _draw() 画图用的方法
  run  定时执行draw
  stop 停下
  clear 清空画板

- 心情签到页面开发
  日历插件
  用户授权和登录流程
  使用小程序云开发的数据库功能

  使用插件流程
  插件管理后台加 极点日历
  




