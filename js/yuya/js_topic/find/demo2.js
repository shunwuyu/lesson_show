function findIndex(array, predicate, context) {
  for (var i = 0; i < array.length; i++) {
    if (predicate.call(context, array[i], i, array)) return i;
  }
}

console.log(findIndex([1,2,3,4], function(item, i, array) {
  if (item == 3) return true;
}))