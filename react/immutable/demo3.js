var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}];

var new_arr = JSON.parse(JSON.stringify(arr));
new_arr[3][0] = 'new1';
console.log(new_arr);
console.log(arr);