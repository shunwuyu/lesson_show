// // const obj = { get id () {
// //   return Math.random();
// // } };
// // function A(_obj) {
// //   obj.id = 20;
// //   return _obj.id;
// // }

// // console.log(A(obj));

// // const obj = Object.freeze({a: 5});
// const obj = Object.freeze({a: {a: 5}});
// function A(b) {
//   obj.a.a = 112;
//   return obj.a.a + b;
// }
// console.log(A(5));

function foo(x) {
  return bar (x);
}

function bar(y) {
  return y + 1;
}

function A(a) {
  return function(b) {
    return a + b;
  }
}

var B = A(5);