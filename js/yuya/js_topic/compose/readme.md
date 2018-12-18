[source](https://juejin.im/post/59a8ccf8f265da2498241625)

sort

柯里化和函数组合实现pointfree

- HELLO, KEVIN 
  嵌套 fn3(fn2(fn1(fn0(x))))
- 优化
  compose 将两个函数组合成一个函数， 让代码从右向运行， 而不是从内向外运行， 可读性大大提升， 函数组合。
  将最后执行， 封装到一个函数里， 
- 支持多个 
- pointfree 
  函数无须提及将要操作的数据是什么样的
