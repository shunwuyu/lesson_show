[source](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)
单线程， 一次只能做一件事， 多核CPU出现， 无法发挥计算能力。
Web Worker 为JavaScript创建多线程环境， 允许主线程创建Worker线程， 一些任务分配给后者运行。
计算密集型或高延迟的任务， 被Worker负担了， 主线程负责UI 很流畅， 不会被阻塞或拖慢。

1 同源机制
2 无法读取网页DOM对象  document window parent , 可以有navigator 和loation
3 不在同一个上下文环境中， 通信只能通过消息
4 不alert confrim   XMLHttpRequest 发出Ajax
5 加载脚本必须来自网络

