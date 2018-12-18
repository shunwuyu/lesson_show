// 赋值给变量
const square = function(x) {
  return x * x;
}
console.log(square(5));
const foo = square;
console.log(foo(6));