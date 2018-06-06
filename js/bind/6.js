Function.prototype.bind2 = function(context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind-what is tring to be bound is not callable")
  }
  var self = this;
  console.log(self);
  var args = Array.prototype.slice.call(arguments, 1);
  var fNOP = function() {};
  var fbound = function() {
    self.apply(this.instanceof self ? this: context, args.concat(Array.prototype.slice.call(arguments)));
  }
  // 防止修改它的prototype
  fNOP.prototype = this.prototype;
  fbound.prototype = new fNOP();
  return fbound;
}

var foo = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);
}

const bindFoo = bar.bind2(foo);