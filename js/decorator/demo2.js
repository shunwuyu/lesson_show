class MyClass {
  @readonly
  method() {}
}
function readonly(target, name, descriptor) {
  console.log(target, name, descriptor);
  descriptor.writable = false;
  return descriptor;
}

const obj = new MyClass();
obj.method = 'a';