var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2);


console.log(Symbol.keyFor(s1));