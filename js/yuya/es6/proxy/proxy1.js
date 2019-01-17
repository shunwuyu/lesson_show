var proxy = new Proxy({}, {
  get: function(obj, prop) {
      console.log('设置 get 操作')
      return obj[prop];
  },
  set: function(obj, prop, value) {
      console.log('设置 set 操作')
      obj[prop] = value;
  }
});
proxy.time = 35; // 设置 set 操作
console.log(proxy.time); 