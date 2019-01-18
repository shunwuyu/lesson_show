[source](http://www.cnblogs.com/asdfq/p/7011396.html)
var o = {}; 
Object.defineProperty(o, "a", {
  value : "original",
  writable : false, // 这个地方为 false
  enumerable : true,
  configurable : true
});

o.a = "new";

o.a = "new"; //此时候, 是更改不了 a 的.

var o = {}; // 创建一个新对象
Object.defineProperty(o, "a", {
  value : "original",
  writable : true,
  enumerable : true,
  configurable : false //这里为false
});
o.a = "new";//此时候, a 进行了改变
//但是如果
delete o.a