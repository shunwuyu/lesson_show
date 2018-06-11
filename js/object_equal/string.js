console.log(typeof 'Curly'); // string
console.log(typeof new String('Curly')); // object
var toString = Object.prototype.toString;
console.log(toString.call('Curly'));
console.log(toString.call(new String('Curly')));

// 利用隐式类型转换
console.log('Curly' + '' === new String('Curly') + '');