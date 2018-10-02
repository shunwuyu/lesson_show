[source](https://juejin.im/post/5ab069f8f265da238b7dd453)
虚拟DOM diff  setState
1. babel jsx  VDOM
练习写Virtual DOM 
https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=DwEwlgbgBAxgNgQwM5IHIILYFMC8AiGAewDsAXBMYrAJzwD4AoKKYACwEYpSxS5c9WWOHEJ5YiFOmz4E9QcMLAA9B0bM27OgHdC1OCGWqGy8BDpA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&lineWrap=true&presets=es2015%2Creact%2Cstage-0&prettier=false&targets=&version=6.26.0&envVersion=
2. jsx => React.createElement(tag, attr, child1, child2, child3);
  .babelrc transform-react-jsx 
  返回的对象记录这个DOM节点所有信息，基因, 通过它们生成DOM, 虚拟DOM。

3. ReactDOM.render
  第一个参数是createElement返回的对象， 虚拟DOM, 而第二个参数则是挂载的目标DOM
  render 方法就是将虚拟DOM渲染成真实DOM
  babel 代码

4. 提问
  没有用到react， 为何要引入react, 
  因为React.creatElement

5. diff算法
每次更新都重新渲染整个应用或整个组件， DOM操作十分昂贵。
为了减少DOM更新, 前后真正变化的部分， 只更新一部份DOM. 
对比变化， 找出需要更新部分的算法叫diff算法
render 算法， 找出真正变化的部份。

上次渲染的虚拟DOM, 对比前后的变化， 得到一系列更新的数据， 应用到真正的DOM上
直接对比虚拟 DOM和真实DOM, 

结构都是一棵树， 完全对比两棵树变化的算法时间复杂度是o(N^3)

- 对比当前真实的DOM和虚拟DOM, 在对比过程中直接更新真实DOM
- 只对比同一层级的变化



- jsx 非全法的js代码, 

React设计哲学非常简单， 自己处理各种细节问题， 真实，在写js。
