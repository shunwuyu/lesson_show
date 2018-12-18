// 引用类型的属性被所有实例共享
// 创建Child实例时， 不能向Parent传参
function Parent() {
  this.names = ['kevin', 'daisy'];
}
function Child() {
}
Child.prototype = new Parent();
Child.prototype = new Parent();
var child1 = new Child();
child1.names.push('yayu');
var child2 = new Child();
console.log(child2.names);