一系列props的传递, 很麻烦。 不只有父子组件， 还有兄弟之间的值传递。
全局共享的store, 在任何地方都可以轻松访问， 十分便捷的完成数据的获取和修改。

childContext
1. 在顶层组件中通过childContextTypes 规定数据类型
2. 在顶层组件中通过getChildContext设置数据类型
3. 在后代组件中通过 contextTypes规定数据类型
4. 在后代组件中通过context参数获取数据

重复的逻辑
在context中获取store  更新各自的state, 
对context 依赖过强。 

高阶组件 connect 

1 封装了connect， 所有有关的connect的操作都交给他来负责。
2 我们改造了后代组件，让它们从 props 中来获取数据，不再依赖 context。

所有的PropTypes 都是固定写死的， 