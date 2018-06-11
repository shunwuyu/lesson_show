const obj = {
  a: 1,
  b: 2
}
console.log(obj.toString());

console.log(Object.prototype.toString.call([1, 'a']));
console.log(Object.prototype.toString.call(() => {}))
console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(undefined))
console.log(Object.prototype.toString.call(Symbol(1)))