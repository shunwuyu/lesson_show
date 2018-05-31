function Foo() {}
var Boo = { name: 'Boo' };
Foo.prototype = Boo;
var f = new Foo();
console.log(f.__proto__ === Foo.prototype);
console.log(f.__proto__ === Boo);
Object.getPrototypeOf(f) === f.__proto__