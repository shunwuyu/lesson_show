function sub_curry(fn) {
  var args = [].slice.call(arguments, 1);
  console.log('------', args);
  return function() {
    return fn.apply(this, args.concat([].slice.call(arguments)));
  }
}

function curry(fn, length) {
  length = length || fn.length;
  // console.log(length);
  var slice = Array.prototype.slice;
  return function() {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments));
      return curry(sub_curry.apply(this, combined), length - arguments.length);
    } else {
      // console.log('++++++', arguments);
      return fn.apply(this, arguments);
    }
  }
}

var fn = curry(function(a, b, c, d, e) {
  return a + b + c + d + e;
});
console.log(fn(1)(2)(3)(4)(5));