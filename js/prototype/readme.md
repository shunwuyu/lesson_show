[source](https://juejin.im/post/5bebc6a3e51d4575125a39ca)

new 过程

> prototype __proto__ 在原型链中起到什么作用 继中什么作用
javascript没有类的概念  所有的数据类型都是对象（object） 工程问题 

Function Object 两种数据类型
引用数据类型 Array Object Date Function RegExp
引用类型分Object Function 两种， 其他的类型是Object类型衍生出来的。

区别
Function 可以被执行， Object构造函数 
new Function 当成构造函数返回一个对象。
Function 有prototype属性
Object 没有

- 继承   js 是对象和对象之间实现的
在继承问题上， 不是区分Function 和Object 统一看成对象即可。
确定继承关系的呢？  __proto__  在Function 和 Object中都有
一个对象A的__proto__属性指向那个对象B B就是A的原型对象（父对象）， 对象A可以使用B中的属性和方法， 也可以使用对象B的原型对象C上的属性和方法， 以此递归， 就是所谓的原型链

最简单继承 __proto__
prototype 起到什么作用呢？
把Function 当做构造函数使用时， __proto__并不是官方标准定义的属性， 用prototype来模仿类和类之间的继承模式

- new 到底都干了啥？
1. Parent 被执行。 p的作用域下被执行， this 指向p, 属性当做p的属性被创建
2. p.__proto__ 指向Parent.prototype 精所在， 属性和方法
 构造一个全新对象  将这个对象执行__proto__链接   绑定this 到全新对象  如果函数没有返回其它对象， 返回新对象

- __proto__是真正用来查找原型链去获取方法的对象
  prototype是在用new 创建对象时用来构建__proto__的对象