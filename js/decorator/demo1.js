@annotation
class MyClass {}

function annotation(target) {
  target.annotated = true;
}

console.log(MyClass);