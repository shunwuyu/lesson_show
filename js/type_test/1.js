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

console.log(typeof und);
console.log(typeof nul);
console.log(typeof boo);
console.log(typeof num);
console.log(typeof str);
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof fun);
console.log(typeof date);
console.log(typeof reg);
console.log(typeof err);
console.log(typeof arg);

