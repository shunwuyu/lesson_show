// idx 开始位置 
function createIndexOfFinder(dir) {
  return function(array, item, idx) {
    var length = array.length; 
    var i = 0;
    
    if (typeof idx === 'number') {
      if (dir > 0) { //正向
        // idx 正值?
        i = idx >= 0 ? idx : Math.max(length + idx, 0);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length): idx + length + 1;
      }
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  }
}

var indexOf = createIndexOfFinder(1);
var lastIndexOf = createIndexOfFinder(-1);
console.log(indexOf([1,2,3,2,3], 2, 3));
