let arr = [];
arr.push("{");
console.log(arr);
arr.push("}");
console.log(arr);
console.log(arr.length);
arr.pop();
console.log(arr);
let obj = {};
obj["{"]  ="}";
obj["("] = ")";
obj["["] = "]";
console.log(obj);

