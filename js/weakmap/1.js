const map = new WeakMap();
// Invalid value used as weak map key
// map.set(1, 2);
// map.set(null, 2);
const wm1 = new WeakMap();
var o1 = {};
wm1.set(o1, 37);
console.log(wm1.get(o1));
console.log(wm1.has(o1));
wm1.delete(o1);
console.log(wm1.has(o1));
