[source](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)

封装了react 专用的库React-Redux 
所有组件分成两大类  UI组件(presentational component )， 和容器组件(Container)
UI组件 纯组件， 纯粹由参数决定它的值。
  - 只负责UI呈现， 不带有任何业务逻辑
  - 没有状态
  - 所有数据都由参数this.props提供
  - 不使用任何Redux 的API

容器组件
  - 负责管理数据和业务逻辑， 不负责UI的呈现
  - 带有内部状态
  - 使用Redux 的API

所有的UI组件都由用户提供， 容器组件都由React-Redux 自动生成, 用户负责视觉层， 状态管理交给它

connect 将这两种组件连起来

没有定义业务逻辑， 这个容器组件毫无意义， 
1. 输入逻辑：
  外部的数据(State对象)如何转换为UI组件的参数
2. 输出逻辑
  用户发出的动作如何变为Action对象， 从UI组件传出去


Provider 让容器组件拿到context

