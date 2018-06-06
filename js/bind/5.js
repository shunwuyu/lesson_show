Function.prototype.bind2 = function(context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var fbound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(this instanceof self ? this : context, args.concat(bindArgs));
  }
  fbound.prototype = this.prototype;
  return fbound
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