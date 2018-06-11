Function.prototype.bind2 = function(context) {
  var self = this;
  // console.log(context)
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(context, args.concat(bindArgs));
  }
}

var foo = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);
}
var bindFoo = bar.bind2(foo, 'daisy');
bindFoo(19);