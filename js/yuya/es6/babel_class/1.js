class Person {
  // state = {
  //   count: 0
  // }
  constructor (name) {
    
    this.name = name;
    this.state = {
      count: 0
    }
  }

  get nickname() {
    console.log('获取了name属性');
    return this.name;
  }

  set nickname(newName) {
    console.log('new name 为：' + newName)
    this.name = newName;
  }

  sayHello () {
    console.log(this.state.count);
    return 'hello, I am ' + this.name ; 
  }

  static say() {
    return '不会被实例继承，直接通过类来调用';
  }
  
}
Person.name = 'Person'

const kevin = new Person('Kevin');
console.log(kevin.sayHello());
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));
console.log(Person.say());
console.log(Person.name);
console.log(kevin.nickname);
kevin.nickname = '大boss';
// Person();