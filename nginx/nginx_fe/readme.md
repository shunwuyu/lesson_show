[source](https://juejin.im/post/5bacbd395188255c8d0fd4b2)
[跨域](https://www.cnblogs.com/woodk/p/5817755.html)
- nginx 是一款轻量级的HTTP服务器, 采用事件驱动的异步非阻塞处理方式框架， 这让其具有极好的IO性能， 常用于服务端的反向代理和负载均衡。
HTTP服务器 事件驱动  异步非阻塞  
node nginx 不冲突
nginx 长于底层服务端的资源的处理（静态资源处理转发，反向代理， 负载均）
node 长于上层具休业务逻辑的处理， 可以完美结合
把 node.js 一些工作放到nginx 上， 而不是痛苦地npm 中找包或造轮子。
不同的配置编写手法， 效率可能差上好几倍。
互联网 CS 之前增加一层提供特写服务的服务器， 即代理服务器。

1。 正向代理 翻墙
这个代理服务器proxy 把墙外服务器server上的网页内容获取，再转发给客户。 
2. 反向
  代理的是服务器 Nginx 
  1. 安全及权限。 
  必须先经过Nginx 将解除或没有权限的请求内容过滤掉
  2. 负载均衡 
  均匀地分配到集群。定期轮询向集群里的所有服务器发送健康检查请求，保持稳定性。

1. 快速实现简单的访问限制
  deny  allow  
2. 解决跨域
  node proxy server 
  location ^~/apis/ {
    rewrite ^/apis/(.*)$ /$1 break;
    proxy_pass https://www.kaola.com;
  }
3. Nginx 内置变量$http_user_agent 
在移动端还是PC, 
  location / {
    if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
      set $mobile_request '1';
    }
    if ($mobile_request = '1') {
      rewrite ^.+ http://mysite-base-H5.com;
    }
  }
4. 合并请求 减少http数 
    location /static/js/ {
        concat on; # 是否打开资源合并开关
        concat_types application/javascript; # 允许合并的资源类型
        concat_unique off; # 是否允许合并不同类型的资源
        concat_max_files 5; # 允许合并的最大资源数目
    }
5. 图片处理
  可以通过proxy_cache配置Nginx缓存


