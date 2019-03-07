[leetcode](https://leetcode-cn.com/problems/perfect-squares/)
[animation](https://mp.weixin.qq.com/s/53AlHe29fJF1hEwj0cj7ZA)
[js](https://github.com/hanzichi/leetcode/blob/master/Algorithms/Perfect%20Squares/perfect-squares.js)

给定正整数n, 找到若十个完全平方数（1，4，9，16，....） 使得它们的和等于n。 组成的完全平方数的个数最少。

广度优先搜索算法， 将n依次减去比n小的所有平方数， 至n=0, 此时的层数即为最后的结果。
将n 依次减去比n小的所有平方数


0  
  1   dp[1] = 1 
  2   dp[4] = 1
  3   dp[9] = 1
  4 

1
  1   dp[2] = 2
  2   dp[5] = 2
  3   dp[10] = 2

2
  1   dp[6] = 
