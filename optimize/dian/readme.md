[source](http://imweb.io/topic/5b6fd3c13cb5a02f33c013bd) 

自动化思想
白屏时间、首屏时间、整页时间、DNS时间、CPU占用率 
CDN加速

1. 网络传输性能优化
浏览器处理用户请求的过程
重定向->拉取缓存->DNS查询->建立TCP链接->发起请求->接收响应->处理HTML元素->元素加载完成。
Etag 服务器

etag on;
expires 7d;

1.2 资源打包压缩
  减少请求数、减少请求资源体积、提升网络传输速度。
  