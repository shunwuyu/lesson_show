// https://blog.csdn.net/ligang2585116/article/details/53522741
function Person(name) {
  this.name = name;
}
Person.prototype = {
  construtor: Person,
  sayName: function() {
    console.log("my name is " + this.name);
  }
}

var p1 = new Person('ligang');
var p2 = new Person('Camile');
p1.sayName();
p2.sayName();

console.log(p1.__proto__ === Person.prototype);