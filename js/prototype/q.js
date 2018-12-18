function Parent(name) {
  this.name = name;
}
let p = new Parent('张三');
console.log(typeof Parent);
console.log(typeof p);
console.log(Parent.prototype);
console.log(p.prototype);
console.log(Parent.__proto__);
console.log(p.__proto__);
