[source](https://juejin.im/post/5b1f4c21f265da6e0f70bb19)

将一个对象序列化的方法 JSON.stringify
加一个toString方法，
key 不重名

防止被new   
this 代表对象

Symbol 独一无二的
1. Symbol 函数生成 typeof  结果为symbol
2. 不能new 的函数，是原始类型的值， 不是对象
3. 接受一个字符串为参数， 表示对Symbol 实例的描述， 为了在控制台显示，以示区别
4. 参数也可以是一个对象， tostring
5. 只表示描述， 返回值是不等的。
7. 不能与其他值运算。
8. 值可以tostring
9. 可以标识符， 用于对象的属性名， 不重名。 
10. 不会出现在fo..in for of 中
也不会被getOwnPropertyNames(), JSON.stringify()  有一个getOwnPropertySymbols

Symbol 过程
1. 如果new 就报错
2. 如果description 是undefined, descString是undefined
3. 否则让descString为ToString
4. 如果报错， 就返回
5. 返回一个新的唯一的Symbol值, 它的内部属性值为descString
无法只返回一个值， 因为有descString , 返回一个对象