[source](https://mp.weixin.qq.com/s?__biz=MzUyNjQxNjYyMg==&mid=2247484265&idx=2&sn=7f72afb341865923315bd51e1f50beff&chksm=fa0e6ce8cd79e5fe4be925fd5f01f59f59010c6c965fb3daefac79992593a6e58990c212e0bb&token=1412967663&lang=zh_CN#rd)

给定一个字符串， 找出不含有重复字符的最长子串的长度。

1 如果当前遍历到的字符从未出现过， 那么直接扩大右边界;      循环
2 如果当前遍历到的字符出现过， 则缩小窗口， 左边索引向右移动， 然后继续观察当前遍历到的字符
3 重复1 2 直到左边索引无法再移动
4 维护一个res, 每次用出现过的突口大小来更新结果res, 最后返回res获取结果。
  