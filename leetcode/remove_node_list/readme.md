[source](https://mp.weixin.qq.com/s?__biz=MzUyNjQxNjYyMg==&mid=2247483821&idx=1&sn=11ecccab76cd53163e9dedb75effeb93&chksm=fa0e6e2ccd79e73ae9137c0d91b3533df4ea4ead4ad081834b8d91ff364c0d55c350ddcfa6c4&scene=21#wechat_redirect)

删除链表的倒数第N个节点

1->2->3->4->5   n = 2.
1->2->3->5
n是有效的。
一趟扫描实现吗？

Maintain two pointers and update one with a delay n steps.
