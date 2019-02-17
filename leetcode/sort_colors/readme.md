[source](https://mp.weixin.qq.com/s?__biz=MzUyNjQxNjYyMg==&mid=2247483706&idx=1&sn=905f43c882a91b55fd169d812620f277&chksm=fa0e6ebbcd79e7ad8857b0dad9ad14dbaf17fe557ef56ba600cec26b2bb668df2e171431d74c&scene=21#wechat_redirect)

[source](https://blog.csdn.net/qq_40547126/article/details/82841257)

红色 白色  蓝色  n 个元素的数组， 原地排序 相同颜色相邻， 并按红色， 白色， 蓝色顺序排列
0， 1， 2 红色  白色  蓝色
[2, 0, 2, 1, , 1, 0]
[0, 0, 1, 1, 2, 2]

- 迭代计算出0、1、和2元素的个数， 然后按0、1、2的排序， 重写当前数组
常数空间的一趟扫描算法吗？

三个指针
