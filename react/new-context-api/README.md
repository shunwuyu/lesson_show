[source](https://github.com/SangKa/react-in-patterns-cn/blob/master/code/new-context-api/src/Title.jsx)

[source](https://github.com/zhengyxchn/react-new-context-api-demo/blob/master/src/MyComponent.js)

将数据存放在某个module中， 就可以实现在任何地方访问/导入

React.createContext 用于传递 初始值（可选择 使用 bitmask 的一个奇妙的选择性退出函数），返回一个包含 provider 和 consumer 的对象
provide 函数使用 higher，并可以接收任何值
consume 函数在 provider 之后任何地方使用，并传递一个返回 JSX 的函数（这有点像 render prop 组件，但 consume 不是组件）。
