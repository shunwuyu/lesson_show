function Otaku (name, age) {
  this.name = name;
  this.age = age;

  this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
  console.log('I am ' + this.name);
}

function objectFactory() {
  // 创建了一个对象obj
  var obj = new Object(),
  // shift操作很有意思
    Constructor = [].shift.call(arguments);
  // obj就可以访问到构选函数原型中的属性
  obj.__proto__ = Constructor.prototype;
  Constructor.apply(obj, arguments);
  return obj;
}

var person = objectFactory(Otaku, 'Kevin', '18');
person.sayYourName();
console.log(person.__proto__);