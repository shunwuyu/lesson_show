// 隐式类型转换
// var a = 1;
// var b = new Number(1);
// console.log(+a === +b);

var a = Number(NaN);
var b = Number(NaN);

console.log(+a === +b); // false