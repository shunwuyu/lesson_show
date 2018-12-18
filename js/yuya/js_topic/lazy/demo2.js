var foo = (function() {
  var t;
  return function() {
    if (t) return t;
    t = new Date();
    return t;
  }
})();
console.log(foo());
setTimeout(() => {
  console.log(foo());
},2000);