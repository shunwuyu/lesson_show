function findLastIndex(array, predicate, context) {
  var length = array.length;
  for (var i = length; i >= 0; i--) {
    if (predicate.call(context, array[i], i, array)) return i;
  }
  return -1;
}

console.log(findLastIndex([1, 2, 1, 3, 4], function(item, index, array){
  if (item == 1) return true;
})) // 0