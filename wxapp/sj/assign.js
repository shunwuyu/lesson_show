const object1 = {
  a: 1,
  b: 2,
  c: 3
};
const object2 = Object.assign({c: 4, d: 5}, object1);
// console.log(object2);

// 复制一个对象
var obj = { a: 1};
var copy = Object.assign({}, obj);
// console.log(copy);

function test() {
  'use strict';
  let obj1 = {a: 0, b: {c: 0}};
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2));
  obj1.a = 1;
  console.log(JSON.stringify(obj1));
  console.log(JSON.stringify(obj2));
  obj2.a = 2;
  console.log(JSON.stringify(obj1));
  console.log(JSON.stringify(obj2));
  // 深拷贝的问题
  obj2.b.c = 3;
  console.log(JSON.stringify(obj1));
  console.log(JSON.stringify(obj2));
  obj1 = {a: 0, b: { c: 0}};
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c =  4;
  console.log(JSON.stringify(obj3));
}

// test();

// 目标对象也被改变了
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };
var obj = Object.assign(o1, o2, o3);
// console.log(o1);

var o1 = { a: 1, b: 1, c: 1};
var o2 = { b: 2, c: 2};
var o3 = { c: 3};
var obj = Object.assign({}, o1, o2, o3);
// console.log(obj);

var o1 = { a: 1};
var o2 = { [Symbol('foo')]: 2 };
var obj = Object.assign({}, o1, o2);
// console.log(Object.getOwnPropertySymbols(obj));


var obj = Object.create({ foo: 1}, {
  bar: {
    value: 2
  },
  baz: {
    value: 3,
    enumerable: true
  }
});

var copy = Object.assign({}, obj);
console.log(copy);
