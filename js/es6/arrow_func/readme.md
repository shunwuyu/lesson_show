[source](https://juejin.im/post/5b14d0b4f265da6e60393680)

讲法：键头的语法进阶过层
bind 实现
new 的过程

返回对象
let func = (value, num) => ({total: value * num})

let func = ({value, num} => ({total: value * num}))

- 箭头函数没有this, 需要查找作用域链来确定this
  最近一层非箭头函数的this.
  
  不能用bind call apply 来改变this

- 没有arguments
  使用rest 参数

- 不能通过new 关键字调用
  [[Call]] 和 [[Construct]]内部方法

  new 时， 执行Construct 方法， 创建一个实例对象， 然后再执行函数休， 将this绑定到实例上。 
  调用[[Call]]方法， 直接执行函数体
  箭头函数没有这些， 不能被用作构造函数，new 会报错。

- 没有new.target

- 没有原型
  没有prototype这个属性

- 没有super 这个属性

箭头函数表达式的语法比函数表达式更短， 并且不绑定自己的this, arguments, super或new.target 这些函数表达式最适合用于非方法函数， 并且它们不能用作构造函数





