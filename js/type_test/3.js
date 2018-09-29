/**
 * @desc 数据类型检测
 * @param 待检测的数据
 * @return {String}类型字符串
 */

var nul = null;
var date = new Date();

function type(obj) {
  return typeof obj !== 'object' ? typeof obj : Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

console.log(type(nul));
console.log(type(date));

