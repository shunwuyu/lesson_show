[source](https://github.com/mqyqingfeng/Blog/issues/22)

1. window resize  scroll
2. mousedown mousemove
3. keyup keydown

只有足够的空闲时间

例子简单， 浏览器反应的过来， 1秒触发了60次， 1000/60=16.67ms 完成， 否则就会有卡顿

触发完事件n秒内不再触发事件， 我才执行， 

不希望等到事件停止触发后才执行， 希望立刻执行函数， 然后等到
停止触发n秒后， 才重新执行。