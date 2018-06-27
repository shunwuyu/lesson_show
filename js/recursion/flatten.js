let _ = require('lodash');

console.log(
  _.flattenDeep([1, [2, [3, [4]], 5]])
);
// function flatten(arr) {
//   return arr.reduce(function(prev, next) {
//     return prev.concat(Array.isArray(next)?flatten(next):next) 
//   }, [])
// }

// console.log(flatten([1,[2,3],[4,[5,[6]]]]));