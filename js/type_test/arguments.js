function funA() {
  console.log(arguments);
  console.log(typeof arguments);
  console.log(Object.prototype.toString.call(arguments));
  console.log(arguments[0]);
}

funA(1,2,3);