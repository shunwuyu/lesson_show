[source](https://juejin.im/post/5b1fa77451882513ea5cc2ca)
递归, defineProperty, 订阅发布者模式


- 先聊compile  reg
  递归 compile 所有结点  当没有结点， 就退出
- 兼听
- 将vm 交给全局， 改变其值， 响应式

- compile 时get 的触发， 很有意思， 
Observer.target  将当前结点存到订阅到这些信息里面，  当set 时就发布