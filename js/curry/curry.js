function currying(fn) {
  var allArgs = [];
  return function next() {
    var args = [].slice.call(arguments);

    if (args.length > 0) {
      allArgs = allArgs.concat(args);
      return next;
    } else {
      return fn.apply(null, allArgs);
    }
  }
}

var add = currying(function() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
})

console.log(add(1)(2)());