var value = 2;

var foo = {
  value: 1
}

Function.prototype.bind2 = function(context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var fNOP = function () {};
  var fbound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(this instanceof self ? this : context, args.concat(bindArgs));
  }
  fNOP.prototype = this.prototype;
  fbound.prototype = new fNOP();
  return bound;
}

function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}
bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');
var obj = new bindFoo('18');
console.log(obj.habit);
console.log(obj.friend);