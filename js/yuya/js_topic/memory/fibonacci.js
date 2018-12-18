var count = 0;
var fibonacci = function(n) {
  count++;
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};
var memorize = function(func, hasher) {
  var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!cache[address]) {
          cache[address] = func.apply(this, arguments);
      }
      return cache[address];
  };
  memoize.cache = {};
  return memoize;
};
// console.log(fibonacci(10));
// console.log(count);

// var count = 0;
fibonacci = memorize(fibonacci)
console.log(fibonacci(10));
console.log(count);

