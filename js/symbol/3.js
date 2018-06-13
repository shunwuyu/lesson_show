var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2);
var s1 = Symbol('foo');
var s2 = Symbol('foo');

console.log(s1 === s2); 

var sym = Symbol('My symbol');
console.log("your symbol is" + sym);