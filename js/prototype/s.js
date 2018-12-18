let A = { name: 'a' };
let B = { age: 18 };
let C = { hobby: '敲代码' };

A.__proto__ = B;
B.__proto__ = C;

console.log(A.name);
console.log(A.age);
console.log(A.hobby);