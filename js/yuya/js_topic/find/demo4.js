function createIndexFinder (dir) {
  return function(array, predicate, context) {
    var length = array.length;
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate.call(context, array[index], index, array)) return index;
    }
    return -1;
  }
}

var findIndex = createIndexFinder(1);
var findLastIndex = createIndexFinder(-1);

console.log(findIndex([1, 2, 1, 3, 4], function(item, index, array){
  if (item == 1) return true;
})) // 0
console.log(findLastIndex([1, 2, 1, 3, 4], function(item, index, array){
  if (item == 1) return true;
})) // 0