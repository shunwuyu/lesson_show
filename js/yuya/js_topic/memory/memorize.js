// function memorize(f) {
//   var cache = {};
//   return function() {
//     // console.log(arguments)
//     var key = arguments.length + Array.prototype.join.call(arguments, ",");
//     // console.log(key);
//     if (key in cache) {
//       console.log('has');
//       return cache[key]
//     } else return cache[key] = f.apply(this, arguments)
//   }
// }

var memorize = function(func, hasher) {
  var memoize = function(key) {
    // console.log(arguments);
    var cache = memoize.cache;
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    if (!cache[address]) {
      cache[address] = func.apply(this, arguments);
    }
    return cache[address];
  }
  memoize.cache = {};
  return memoize;
}

var add = function(a, b, c) {
  return a + b + c
}

// var memorizedAdd = memorize(add)
// // console.log(memorizedAdd(1, 2, 3));
// // console.log(memorizedAdd(1, 2, 3));

var memoizedAdd = memorize(add, function() {
  var args = Array.prototype.slice.call(arguments)
  return JSON.stringify(args)
})
console.log(memoizedAdd(1, 2, 3))
console.log(memoizedAdd(1, 2, 3))

var propValue = function(obj) {
  return obj.value
}

var memorizedProp = memorize(propValue, function() {
  var args = Array.prototype.slice.call(arguments)
  return JSON.stringify(args);
});
console.log(memorizedProp({value: 1}));
console.log(memorizedProp({value: 2}));