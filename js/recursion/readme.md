[source](https://github.com/mqyqingfeng/Blog/issues/49)

程序调用自身的编程技巧称为递归(recursion)

## 阶乘
```
function factorial(n) {
    if (n == 1) return n;
    return n * factorial(n - 1)
}
```

## 斐波那契数列
黄金分割数列， 以兔子繁殖为例子而引入的。1、1、2、3、5、8、13、21、34
以递归的方法定义
F(1) = 1,
F(2) = 1,
F(n) = F(n-1) + F(n-2);

function fibonacci(n){
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
} 

## 递归条件

具备边界条件， 递归前进段和递归返回段，
当边界条件不满足时， 递归前进， 当边界条件满足时， 递归返回。

1. 子问题须与原始问题为同样的事， 且更为简单。
2. 不能无限制地调用本身，须有个出口， 化简为非递归状况处理。


优化问题
  压在那里， 暂不处理  维护也有开销。


# 应用
<!-- 数组扁平化 -->