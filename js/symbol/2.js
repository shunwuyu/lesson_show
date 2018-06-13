// 覆盖toString方法
const obj = {
  toString () {
    return 'abc';
  }
};
// console.log(obj.toString());
const sym = Symbol(obj);
console.log(sym);