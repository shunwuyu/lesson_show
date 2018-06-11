// 变量作用域提升
// true 1 | false undefined
// false 未定义错误
// if (false) {
//   var value = 1;
// }
// console.log(value);
// var value;
// if (true) {
//   value = 1;
// }
// console.log(value);
// 依然可访问
// for (var i = 0; i < 10; i++) {

// }
// console.log(i);
// 变量生命周期 循环没死的控制，ECMA 引入了块级作用域 
// 块级作用域存在于：
// 函数内部
// 块中（字符{}）

// 块级声明用于声明在指定块的作用域外无法访问的变量。
// 不会被提升
// if (false) {
//   let value = 1;
// }
// console.log(value);
// 重复申明报错
// var value = 1;
// let value = 2;
// 不绑定全局作用域
// var value = 1;
// console.log(global.value);
// const 用于声明常量， 不能修改
// 不允许修改绑定， 但允许修改值
// const data = { value: 1}
// data.value = 2;
// data.value = 3;
// data = {};
// TDZ 临时死区(Temporal Dead Zone)
// let 和const 不会提升至作用域顶部，
// 将声明放在TDZ中， 
// 只有执行过变量声明语句后，变量才会从 TDZ 中移出 
// console.log(typeof value);
// let value = 1;

var value = "global";
// (function() {
//   // 先写这个
//   //引用了TDZ中的变量
//   console.log(value);
//   let value = 'local';
// })();
// {
//   console.log(value);
//   const value = 'local';
// }
// 循环中的块级作用域
// var funcs = [];
// for (var i = 0; i < 3; i++) {
//   funcs[i] = function() {
//     console.log(i);
//   }
// }
// funcs[0]();

// var funcs = [];
// for (var i = 0; i < 3; i++) {
//   funcs[i] = (function(i){
//     return function() {
//       console.log(i);
//     }
//   }(i))
// }
// funcs[0]();
// var funcs = [];
// for(let i = 0; i < 3; i++) {
//   funcs[i] = function() {
//     console.log(i);
//   }
// }
// funcs[0]();

// let 单独的作用域
for(let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}