class Person {
  constructor(fname, age) {
    this.fname = fname;
    this.age = age;
  }
  // @nonenumerable
  get kidCount() { return this.children.length; }
}

Object.defineProperty(Person, 'fname', {
  value:'change',
  enumerable:false
});

Object.defineProperty(Person, 'kidCount', {
  value:'me',
  enumerable:false
});

function nonenumerable(target, name, descriptor) {
  descriptor.enumerable = false;
  return descriptor;
}

var p1 = new Person('fname', 20);
// var keys = Object.keys(Person.prototype);
// console.log(keys);

for (key in p1) {
  console.log(p1[key]);
}