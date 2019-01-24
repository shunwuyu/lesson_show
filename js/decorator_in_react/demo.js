@testable
class MyTestableClass {
}

function testable(target) {
  target.isTestable = true
}

console.log(MyTestableClass.isTestable);