function sortedIndex(array, obj) {
  var low = 0, high = array.length;
  // 递归
  while(low < high) {
    var mid = Math.floor((low + high) / 2);
    if (array[mid] < obj) low = mid + 1;
    else high = mid;
  }
  return high;
}

console.log(sortedIndex([10, 20, 30, 40, 50], 35))