[source](https://segmentfault.com/a/1190000014683917)

讲法：
  探索式提问
    1. 实现原理
    容器及容器内的页面取当前可视区高度， 同时容器的父级元素overflow属性值为hidden.
    更改top 全屏滚动
    2. 封装成类 class PullPage
    3. 兼容性, 试配PC 手机
  增量式开发
    1. html css 
      body overflow:hidden+#pureFullPage + .page*n
    2. 建类
      PC为主 
      throttle 事件
      手机触摸
      resize
      nav
throttle  节流 固定的时间只执行一次
debounce 将一个连续的函数调用递归为一个。


容器或容器内的页面取当前可视区高度， 同时容器的父级元素oveflow属性设置为hidden, 更过更改容器top值实现全屏滚动效果。

new PurePullPage().init()

html结构
#pureFullPageContainer
  .page*3
  
position 属性值需要设置为relative 不为static时才有效
不能设为100vh

#pureFullPage.style.height = document.documentElement.clientHeight + 'px'

5 事件
鼠标滚动， 触摸板滑动以及手机屏幕上下滑动

PC
触摸板上下滑动和鼠标滚动绑定的是同一个事件
mousewheel   wheelDelta  -120倍数
goDown()
goUp()