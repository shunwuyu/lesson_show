var toUpperCase = function(x) {
  return x.toUpperCase();
}
var hello = function(x) {
  return 'HELLO, ' + x;
}
var greet = function(x) {
  return hello(toUpperCase(x));
}
getSelection('kevin');
