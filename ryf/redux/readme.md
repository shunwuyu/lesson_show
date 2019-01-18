[source](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)

React 只是DOM的一个抽象层， 并非Web 应用的完整解决方案。
代码结构  webpack 
组件之间的通信   redux 

多交互  多数据源
某个组件状态， 需要共享
某个组件状态需要在任何地方都可以拿到
一个组件需要改变全局状态
一个组件需要改变另一个组件的状态
查询状态 改变状态  传播状态的变化

1. Web应用是一个状态机， 视图与状态是一一对应的
2. 所有的状态， 保存在一个对象里面

3.1 Store 
  整个应用只能有一个Store
  一个State 对应一个View
  Action是View发出的通知， 
  改变State的唯一方法， 是使用Action
  Action Creator
  State 的计算过程叫reducer
  纯函数， 
  store.subscribe 

- 异步
  在异步操作后自动执行呢？ 中间件
  