class Person {
  constructor(name) {
      this.name = name;
  }

  sayHello() {
      return 'hello, I am ' + this.name;
  }

  static onlySayHello() {
      return 'hello'
  }

  get name() {
      return 'kevin';
  }

  set name(newName) {
      console.log('new name 为：' + newName)
  }
}
