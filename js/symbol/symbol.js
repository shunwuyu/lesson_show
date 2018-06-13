(function() {
  var root = this;

  var SymbolPolyfill = function Symbol(description) {

      // 实现特性第 2 点：Symbol 函数前不能使用 new 命令
      if (this instanceof SymbolPolyfill) throw new TypeError('Symbol is not a constructor');

      // 实现特性第 5 点：如果 Symbol 的参数是一个对象，就会调用该对象的 toString 方法，将其转为字符串，然后才生成一个 Symbol 值。
      var descString = description === undefined ? undefined : String(description)

      var symbol = Object.create(null)

      Object.defineProperties(symbol, {
          '__Description__': {
              value: descString,
              writable: false,
              enumerable: false,
              configurable: false
          }
      });

      // 实现特性第 6 点，因为调用该方法，返回的是一个新对象，两个对象之间，只要引用不同，就不会相同
      return symbol;
  }

  root.SymbolPolyfill = SymbolPolyfill;
})();

let a = SymbolPolyfill('aaa');
console.log(a.__Description__);