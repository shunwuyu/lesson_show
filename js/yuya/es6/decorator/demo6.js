//not writable
class Person {
  @readonly
  name() {
    return `${this.first} ${this.last}`
  }
}

function readonly(target, name, descriptor) {
  console.log(target, name, descriptor);
  descriptor.writable = false;
  return descriptor;
}

const ali = new Person();
ali.first = 'ali';
ali.last = 'Be';
console.log(ali.name());
ali.name = () => {};
console.log(ali.name());
