[source](https://juejin.im/post/5b0b9b9051882515773ae714)
Symbol call  js  typeof 来写

typeof 七种类型  number string  object  boolean, function, undefined, symbol 
非object时， 都可以。

原理。 js 在底层怎么存储数据的类型信息的？
变量的机器码的低位1-3位存储其类型信息。
000  对象
010 浮点数
100 字符串 
110 布尔值
1 整数

undefined null 特殊
null 机器码为0
undefined  用-2^30 来表示
Object.prototype.toString 判断

instanceof 判断一个实例是否属于某种类型
instanceof 也可以判断一个实例是否是其父类型或者祖先类型的实例。

instanceof 主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可

每个JavaScript都有一个隐式的__proto__原型属性，
显示的原型属性是prototype, 
Object.prototype.__proto__ 为null 


__proto__  prototype 的区别与联系
__proto__ 是每个对象都有的一个属性， 而prototype是函数才会有的属性！！
Object.getPrototypeOf() 代替__proto__

几乎所有的函数都有prototype，指针， 指向一个对象， 包含可以有特定类型的所有实例共享
的属性和方法。通过调用构造函数而创建的那个对象实例的原型对象 hasOwnProperty()

[source](https://blog.csdn.net/ligang2585116/article/details/53522741) 

__proto__ 隐式原型， 一个对象的隐式原型指向构造该对象的构造函数的原型。
保证了实例能访问构造函数原型中定义的属性和方法。


