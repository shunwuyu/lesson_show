class Vue {
  constructor (options) {
    this.data = options.data;
    this.methods = options.methods;
    Object.keys(this.data).forEach((key) => {
      this.proxyKeys(key);
    })
    // 发布者  数据不只用于一个地方， 模板， 指令， 方法里... 
    // data 成为一个发布者吧
    // 发布者？  订阅？模板-发布的关系 1对多的
    observe(this.data);
    // 模板里面编译的过程，建立起来订阅发布关系
    new Compile(options.el, this);
    options.mounted.call(this);
  }

  proxyKeys (key) {
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function getter () {
        return this.data[key]
      },
      set: function setter (newVal) {
        this.data[key] = newVal;
      }
    })
  }
}