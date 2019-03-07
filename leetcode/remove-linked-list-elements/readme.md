[leetcode](https://leetcode-cn.com/problems/remove-linked-list-elements/)
[js](https://github.com/hanzichi/leetcode/blob/master/Algorithms/Remove%20Linked%20List%20Elements/remove-linked-list-elements.js)
[animation](https://mp.weixin.qq.com/s?__biz=MzUyNjQxNjYyMg==&mid=2247483766&idx=1&sn=6721376a65680bf7cf9064cf7b1ae4ae&chksm=fa0e6ef7cd79e7e1665e60fe6ea3f2087bca518c1573bc4c4b9425573f98401bafc59542dca0&scene=21#wechat_redirect)

删除链表中给定的值的所有结点 203

链表遍历和设置指针的知识点

主要考察了基本的链表遍历和设置指针的知识点。

虚拟头节点dummyHead, 遍历查看原链表，遇到与给定值相同的元素， 将该元素的前后两个节点连接起来， 然后删除该元素即可

js splice + 数组顺序指针设置