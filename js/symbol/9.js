var mySymbol = Symbol();
// var a = {};
// a[mySymbol] = 'Hello!';
var a = {
  [mySymbol]: 'Hello!'
};

var a = {};
Object.defineProperties(a, mySymbol, { value: 'Hello!'});
console.log(a[mySymbol]);