[source](https://juejin.im/post/5b0c3b53f265da09253cbed0)

一、 懒加载
也叫延迟加载， 长网页中延迟加载图片， 优化网页性能的方式。
可视区之外的图像不会加载，使网页加载更快， 减少服务器负载。
例子： 长的电商场景中。

2. 为什么要用懒加载
  - 提升用户的体验
  - 减少无效资源的加载
  - 防止并发加载的资源过多会阻塞js的加载

  3. 懒加载的原理
    src 空，  data-original  scroll 
    图片是否进入可视区域， src = data-original

    getBoundingClientRect()
     
