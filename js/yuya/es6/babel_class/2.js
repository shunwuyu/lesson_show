function Person(name) {
  this.name = name;
}

Person.prototype = {
  sayHello: function() {
    return 'hello, I am ' + this.name;
  },
  get nickname() {
    console.log('获取了name属性');
    return this.name;
  },
  set nickname(newName) {
    console.log('new name 为：' + newName)
    this.name = newName;
  }
}

Person.say = function() {
  return '不会被实例继承，直接通过类来调用';
}

Person.name = 'Person'

var kevin = new Person('Kevin');
console.log(kevin.sayHello());
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));
console.log(Person.say());
console.log(Person.name);
Person();
console.log(kevin.nickname);
// kevin.nickname = '大boss';