[source](https://juejin.im/book/5b7be023e51d4538850305d0)

- 微信小游戏， 社交和游戏创意变为现实
  微信小程序里运行的HTML5游戏。 
  1. 轻量化  上限为4M, 后升为8M
  休闲类的轻量级游戏
  2. 即点即玩
  3. 流畅体验
    WebGL 3D渲染， 本地存储、分包加载、热更新、支付
    快速分发、社交化传播
  4. 好友超越、好友排行、群排行 
    完善渲染、文件系统、多线程
  5. 创收模式
    道具内购（安卓）
  6. 广告展示的场景。Banner，为保证用户体验，放于结算页。激励视频广告，与游戏声景融合。 
    社交场景与游戏场景做融合。
  7. QQ空间小游戏
    双人PK模式

## 小游戏开发基础
  wx API 
  wx.createCanvas()
  离屏Canvas, 
  GameGlobal 
  game.js, game.json
    deviceOrientation  showStatusBar  networkTimeout
  - 分包加载的配置
    首先是主包， wx.loadSubpackage() 
  