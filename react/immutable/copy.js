var arr = ['old', 1, true, null, undefined];
var new_arr = arr.concat();
// console.log(new_arr);
new_arr[0] = 'new';

console.log(arr);
console.log(new_arr);