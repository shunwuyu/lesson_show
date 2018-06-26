[source](https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/http.md)
服务器server  接收来自客户端的请求
客户端client 向服务器发起请求， 并将服务器返回的内容打印到控制台。

http.ServerResponse 给请求方发送数据。响应表头， 响应主体等
http.IncomingMessage 
method server端
statusCode  statusMessage client端有

http.Server
继承了net.Server  socket 双工的stream接口
