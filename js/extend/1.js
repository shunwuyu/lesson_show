// 如果不设置subClass.prorotype.constructor = subClass 
// 子类的 author.__proto__.constructor 就是父类，
// 加了后， 父类被污染 

function Person(name) {
  this.name = name
}
Person.prototype.getName = function() {
  return this.name;
}

function Author(name, books) {
  Person.call(this, name);
  this.books = books;
}

extend(Author, Person);
Author.prototype.getBooks = function() {
  return this.books;
}

function extend(subClass, superClass) {
  // subClass.prorotype = superClass.prototype
  // subClass.prorotype.constructor = subClass;
  var F = function() {};
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;
  subClass.superClass = superClass;
  if (superClass.prototype.constructor == Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }
}

const zk = new Person('曾凯');
console.log(zk.constructor.prototype);
// const author = new Author('高尔基', ['我的大学']);
// console.log(author.__proto__.constructor);
// console.log(zk.constructor.prototype);

