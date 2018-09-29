export class Person {
  constructor ({ name }) {
    this.name = name
  }
  getName () {
    return this.name
  }
}

export class Apple {
  constructor ({ model }) {
    this.model = model
  }
  getModel () {
    return this.model
  }
}