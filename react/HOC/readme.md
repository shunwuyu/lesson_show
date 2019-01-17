[source](https://juejin.im/post/59b36b416fb9a00a636a207e)
[source](https://juejin.im/post/5ac9dc516fb9a028cd455df8)
传入一个组件， 返回另一个组件的函数， 其概念与高阶函数的将函数作为参数传入类似
const EnhancedComponent = higherOrderComponent(WrappedComponent)
设计模式  pattern

- 代码复用
  相似度高的组件通过将组件重复部分抽取出来， 再通过高阶组件扩展， 组件可复用的目的
- 打点
