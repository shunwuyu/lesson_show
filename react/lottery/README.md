[source](https://github.com/binnear/lottery/blob/master/src/App.js)

- ref
- canvas api
  save 保存canvas 状态, 之后， 可以调用平移 放缩 旋转 等操作
  restore 恢复Canvas 之前保存的状态 防止save后对Cavans 进行的操作对后续绘制影响
  一结合刚刚的绘制就是独立的

- startRadian  endRadian 悬转
  sin cos  每边的中间点
- lineText
  context.measureText 量出长度
  maxLineWidth -= context.measureText(text[0]).width
  每次少放一个字
  lineList.push(tempLine) 最初的放置
