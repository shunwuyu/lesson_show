var LRUCache = function(capacity) {
  this.capacity = capacity; //容量
  this.obj = {}; // HashMap
  this.arr = []; // 顺序  
}

LRUCache.prototype.get = function(key) {
  var val = this.obj[key]; // 为正数
  if (val > 0) {
    var index = this.arr.indexOf(key); //将key在数组里保存， 提供顺序
    this.arr.splice(index, 1);
    this.arr.unshift(key);
    return val;
  } else 
    return -1;
}

LRUCache.prototype.set = function(key, value) {
  if (this.obj[key]) { //如果已有值
    this.obj[key] = value; //更新值
    var index = this.arr.indexOf(key); //调整顺序到顶部
    this.arr.splice(index, 1);
    this.arr.unshift(key);
    return;
  }

  if (this.capacity === this.arr.length) { //放满了
    var k = this.arr.pop(); //把最后的也就是不常用的移除
    this.obj[k] = undefined; //将值清空
  }

  this.obj[key] = value; //没有就设置值
  this.arr.unshift(key); //放到最前面
}


var cache = new LRUCache(2);
cache.set(1, 1);
cache.set(2, 2);
console.log(cache.get(1));
cache.set(3, 3);
console.log(cache.get(2));
cache.set(4, 4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));
