// let obj = new Object();
// obj = null;

// var obj = new WeakObject();

// let key = new Array(5*1024*1024);
// let arr = [
//   [key, 1]
// ];
// key = null;
// console.log(arr);
// arr对象对key的强引用, 但是没有去除arr 对Obj的强引用, 所以Obj还是不会被回收掉。

let map = new WeakMap();
let key = new Array(5*1024*1024);
map.set(key, 1);  //建立了map对key所引用对象的强引用
key = null; //不会导致key的原引用对象被回收
console.log(map.get(key));