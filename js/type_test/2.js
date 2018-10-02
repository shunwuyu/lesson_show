var und = undefined;
var nul = null;
var boo = true;
var num = 1;
var str = 'xys';
var obj = new Object();
var arr = [1,2,3];
var fun = function() {};
var date = new Date();
var reg = /a/g;
var err = new Error();
var arg;
(function getArg() {
  arg = arguments;
})();
var toString = Object.prototype.toString;
console.log(toString.call(und));
console.log(toString.call(nul));  // [object Null]
console.log(toString.call(boo));  // [object Boolean]
console.log(toString.call(num));  // [object Number]
console.log(toString.call(str));  // [object String]
console.log(toString.call(obj));  // [object Object]
console.log(toString.call(arr));  // [object Array]
console.log(toString.call(fun));  // [object Function]
console.log(toString.call(date));  // [object Date]
console.log(toString.call(reg));  // [object RegExp]
console.log(toString.call(err));  // [object Error]
console.log(toString.call(arg));  // [object Arguments]