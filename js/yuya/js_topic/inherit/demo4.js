// 避免了引用类型的属性被所有实例共享
// 可以在Child中向Parent传参
function Parent(name) {
  this.name = name;
  this.names = ['kevin', 'daisy'];
  this.sayName = function() {
    console.log(this.names);
  }
}
Parent.prototype.sayName = function() {
  console.log(this.names);
}
function Child(name) {
  Parent.call(this, name);
}
var child1 = new Child('yayu');
child1.names.push('yayu');
var child2 = new Child('Cristo');
child2.sayName();