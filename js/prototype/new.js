function Parent(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}
Parent.prototype.getName = function() {
  console.log('name是' + this.name);
}

let p = new Parent('张三', 18, '敲代码');
console.log(p.name);
console.log(p.age);
console.log(p.hobby);
p.getName();

console.log(p.__proto__ == Parent.prototype);