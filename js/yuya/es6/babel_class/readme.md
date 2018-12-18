[source](https://juejin.im/post/5be053826fb9a049aa6e88a9)
1. ES6 类和ES5类的对应
  - ES5 构造函数，及原型链方法 ES6 constructor及内部方法 不可枚举
  - 实例属性位置  构造函数  constructor  
  - 静态方法  内部static  挂在构造函数上
  - 静态属性
  - new 调用
  - getter 和 setter

2. Babel 编译
  - 加.babelrc _classCallCheck
  - 加plugin
  - _createClass


ES6 class 和ES5 的构造函数是如何对应的
只是一个语法糖， 让对象原型的写法更清晰， 更像面向对象编程的语法而已。

ES5 构造函数Person 对应ES6的 Person 类的constructor方法
