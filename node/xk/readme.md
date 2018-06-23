
- 先搭服务器
- 性能优化
- zlib

gzip 性能优化， 浏览器向服务器发送资源请求，下载一个js文件， 服务器先对资源压缩，再返回浏览器，以此节省流量，加快访问速度。
HTTP头  Accept-Encoding  可以用gzip, 或者defalte算法压缩资源
Accept-Encoding: gzip, deflate

Zlib模块对文件进行压缩
