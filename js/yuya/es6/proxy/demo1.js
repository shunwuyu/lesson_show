var obj = {};
Object.defineProperty(obj, "num", {
    value : 1,
    writable : true, //false
    enumerable : false,
    configurable : false
});
obj.num = 2;
console.log(Object.keys(obj));
// console.log();
console.log(obj.num);