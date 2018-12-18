var foo = function() {
  var t = new Date();
  foo = function() {
    return t;
  }
  return foo();
}

console.log(foo());
setTimeout(() => {
  console.log(foo());
},2000);