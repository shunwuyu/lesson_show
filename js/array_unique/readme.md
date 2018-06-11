[source](https://juejin.im/post/5aed6110518825671b026bed)

时间复杂度是一个函数， 定性描述了算法的运行时间。 这是一个关于代表算法输入值的字符串的长度的函数
大O符号表述, 不包括这个函数的低阶项和首项系数。

Set 类型
https://github.com/wesbos/es6.io/blob/master/18%20-%20Sets%20and%20WeakSets/sets.html
Array.from
https://github.com/wesbos/es6.io/blob/master/07%20-%20An%20Array%20of%20Improvements/Array-from-and-of.html



去重是热点问题

## 双循环去重

O(n^2) 二重循环 耗费内存

## indexOf 方法去重
-1

## 位置是否跟当前的位置一致
filter
想法挺好的， 第一次出现的位置是否跟现在的一致

## 相邻元素去重
选排序， 再去重

##  利用对象属性去重
key ++

## set与解构赋值去重
Set 不重复

## Array.from 与Set结合

