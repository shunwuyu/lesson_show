[source](https://juejin.im/post/5b1cebece51d4506ae71addf)

Ajax
Asynchronous JavaScript and XML, 异步请求数据的web开发技术， 改善用户的体验和页面性能很有帮助， 不需要刷新页面。
例子 www.baidu.com  segmentfault  www.kuaidi100.com  32201222
目的： 提高用户体验， 较少网络数据的传输量

二、Ajax 原理是什么
领导找小李汇报工作
1. 领导告诉秘书把小李叫过来
2. 领导接着干别的事情
3. 秘书去叫小李
4. 秘书领小李过来
5. 秘书告诉领导小李来了
6. 小李跟领导汇报工作

XMLHttpRequest对象, 秘书
浏览器发出http请求与接收HTTP响应

三、Ajax的使用
创建 XMLHttpRequest对象

0 未初始化， 还没有调用send()方法
1 已调用send方法 正在发送请求
2 载入完成， send方法执行完成， 已接收到全部响应内容
3 正在解析响应内容
4 响应内容解析完成， 可以客户端调用了。

status 1  接收的请求正在处理
2   成功状态码
3   重定向状态码
4   客户端错误状态码
5   服务器错误状态码







