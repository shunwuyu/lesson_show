// 一个正整数的阶乘是所有小于及等于该数的正整数的积， 并且0的阶乘为1。 n!
// 大型复杂的问题 相似的小问题 边界条件 n <= 1
// 递归前进 n-1
// 递归返回段。return 
function factorial(n) {
  return (n <= 1) ? 1 : n * factorial(n - 1);
}

console.log(factorial(10));