[source](http://ghmagical.com/article/page/id/AASiankfBJWp)
Ajax 需要跨域， 罪魁祸首是浏览器的同源策略。
同源：Ajax只能获取这个页面相同源或者相同域的数据。
协议，域名，端口号都相同。

JSONP(JSON with padding) 跨域请求方式。script 标签可以跨域请求的特性
src => 服务器=>返回 JavaScript 代码=》 浏览器执行

回调函数 和 数据
回调函数在浏览器控制， 作为参数发往服务器端，服务器端响应时， 会把函数和数据拼成字符器返回

