var value = 2;
var foo = {
  value: 1
}

function bar(name, age) {
  this.habit = 'shopping';
  // 绑定的this失效了
  console.log(this.value);
  console.log(name);
  console.log(age);
}
bar.prototype.friend = 'kevin';
var bindFoo = bar.bind(foo, 'daisy');
var obj = new bindFoo('18');
console.log(obj.habit);
console.log(obj.friend);