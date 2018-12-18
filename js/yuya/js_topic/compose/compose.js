var compose = function(f, g) {
  return function(x) {
    return f(g(x));
  }
}

var toUpperCase = function(x) { return x.toUpperCase(); };
var hello = function(x) { return 'HELLO, ' + x; };
var greet = compose(hello, toUpperCase);
console.log(greet('kevin'));
