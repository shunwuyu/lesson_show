var _class;

let MyTestableClass = testable(_class = class MyTestableClass {}) || _class;

function testable(target) {
  target.isTestable = true;
}

console.log(MyTestableClass.isTestable);
