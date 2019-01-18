[source](https://github.com/reduxjs/redux/blob/master/examples/counter/src/index.js)
[middlewares](https://zhuanlan.zhihu.com/p/20597452#!)

- store.getState()

- 改变数据的唯一办法， 就是使用action

- store.dispatch 发出动作的唯一方法

- subscribe
  一旦State 发生变化， 就自动执行这个函数

- reducer
  接收到Action 后， 必需给出一个新的state, 这样view 才会发生变化, 这种计算过程叫做Reducer


- middlewares
  logger 已成