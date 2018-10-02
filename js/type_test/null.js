// https://www.cnblogs.com/wzybnzy/p/7232618.html
JS bug , 二进制， 前三位为0 都为对象, 32个字节存储， 由标志位1-3和数值组成， 

var nul = null;
console.log(typeof null);
console.log(Object.prototype.toString.call(nul));