function deepClone(o1, o2) {
  for (let k in o2) {
    if (typeof o2[k] === 'object') {
      o1[k] = {};
      deepClone(o1[k], o2[k]);
    } else {
      o1[k] = o2[k]
    }
  }
}

let obj = {
  a: 1,
  b: [1, 2, 3],
  c: {}
};

let emptyObj = Object.create(null);
deepClone(emptyObj, obj);
console.log(emptyObj.a === obj.a);
console.log(emtptyObj.b === obj.b);
