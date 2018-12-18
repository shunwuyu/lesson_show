const objectFactory = require('./new');
function Otaku(name, age) {
  this.name = name;
  this.age = age;
  this.habit = 'Games';
}

Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function() {
  console.log('I am ' + this.name);
}

var person = new Otaku('Kevin', '18');
console.log(person.name);
console.log(person.habit);
console.log(person.strength);

person.sayYourName();

var person = objectFactory(Otaku, 'Kevin', '18');
console.log(person.name);
console.log(person.habit);
console.log(person.strength);
person.sayYourName();

