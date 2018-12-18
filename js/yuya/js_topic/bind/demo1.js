var foo = {
  value: 1
}

function bar (name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);
}

// bar.call(foo);
// bar.apply(foo);
// var bindFoo = bar.bind(foo);
// bindFoo();
// console.log(bar.__proto__);
// Function.prototype.bind2 = function(context) {
//   var self = this; 
//   console.log(self);
//   return function () {
//     self.apply(context);
//   }
// }
// var bindFoo = bar.bind2(foo);
// bindFoo();


Function.prototype.bind2 = function(context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(context, args.concat(bindArgs));
  }
}

var bindFoo = bar.bind2(foo, 'daisy');
bindFoo('18');