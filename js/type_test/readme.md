[source](https://juejin.im/post/5ba221fb6fb9a05d3c7ff01c)

- 将类型覆盖下？ 
  基本类型， 引用？类型
  typeof null  object?
  12 种数据类型
  Arguments  -> Object
  

- typeof 基本类型大部份能被准确检测出来并返回正确的字符串(null object)， 而引用类型大部分不能被准确检测（除Function） object

- Object.prototype.toString 
  1. this undefined return [object Undefined]
  2. if the value is null, return [object Null]
  3. 准确表示各个数据的类型，大写， typeof 是小写

- void 0 就是undefined  少写几个字母
