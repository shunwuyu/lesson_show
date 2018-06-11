function new_instance_of(leftValue, rightValue) {
  let rightProto = rightValue.prototype;
  // console.log(rightProto);
  leftValue = leftValue.__proto__;
  // console.log(leftValue)
  while (true) {
    if (leftValue === null) {
      return false;
    }
    console.log(leftValue, rightProto);
    if (leftValue === rightProto) {
      return true;
    }
    leftValue = leftValue.__proto__
  }
}

function Foo() {
}


console.log(new_instance_of(Foo, Object));