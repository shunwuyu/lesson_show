/**
 * @desc 是否是 Undefined 类型检测
 * @param obj 待检测的数据
 * @return {Boolean}布尔值
 */

 var und = undefined;

 function isUndefined(obj) {
   return obj === void 0;
 }

 console.log(isUndefined(und));

 function isNull(obj) {
   return obj === null;
 }

 function isBoolean(obj) {
   return typeof(obj) === 'boolean';
 }

 function isNumber(obj) {
   return typeof(obj) === 'number';
 }

 function isString(obj) {
   return typeof(obj) === 'string';
 }

 function isObject(obj) {
   return Object.prototype.toString.call(obj) === '[object Object]';
 }

 function isArray(obj) {
   return Array.isArray?Array.isArray(obj):Object.prototype.toString.call(obj) === '[object Array]';
 }

 function isFunction(obj) {
   return typeof(obj) === 'function';
 }

 function isDate(obj) {
   return Object.prototype.toString.call(obj) === '[object Date]';
 }

 function isRegExp(obj) {
   return Object.prototype.toString.call(obj) === '[object RegExp]';
 }

 function isError(obj) {
  return Object.prototype.toString.call(obj) === '[object Error]';
 }

 function isArguments(obj) {
  return Object.prototype.toString.call(obj) === '[object Arguments]';
 }