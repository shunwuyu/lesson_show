// http://www.aliued.com/?p=4175
// 引用类型
const obj1 = {a: 1, b: 2, c: 3};
let obj2 = obj1;
console.log(obj2 === obj1);
obj2.b = 4;
console.log(obj2);
console.log(obj1);
console.log(obj2 === obj1);


// const Immutable = require('immutable');
// let obj1 = Immutable.Map({a: 1, b: 2, c: 3});
// let obj2 = obj1;
// obj2 = obj2.set("b", 4);
// console.log(obj2);
// console.log(obj1);
// console.log(obj2 === obj1);
