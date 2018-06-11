function Person(name) {
  this.name = name;
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
  var F = function() {};
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;
  subClass.superClass = superClass.prototype;
  if (superClass.prototype.constructor == Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }

}


function hasPrototypeProperty(obj, name) {
  console.log(name in obj);
  return name in obj && !obj.hasOwnProperty(name);
}

const obj = new Author('托尔斯泰', ['战争与和平']);


console.log(hasPrototypeProperty(obj, 'toString'));
