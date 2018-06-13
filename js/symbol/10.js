var obj = {};
var a = Symbol('a');
obj[a] = 'Hello';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);