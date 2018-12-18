function cb(fn, context) {
  return function(obj) {
    return fn ? fn.call(context, obj):obj 
  }
}

function sortedIndex(array, obj, iteratee, context) {
  // console.log(context);
  iteratee = cb(iteratee, context)
  var low = 0, high = array.length;
  while(low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee(array[mid]) < iteratee(obj)) low = mid + 1;
    else high = mid;
  }
  return high;
}

var stooges = [{name: 'stooge1', age: 10}, { name: 'stooge2', age: 30}];
var result = sortedIndex(stooges, { name: 'stooge3', age: 20}, function(stooge) {
  return stooge.age
});
console.log(result);