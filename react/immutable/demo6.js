var deepCopy = function(obj) {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
          newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
      }
  }
  return newObj;
}

var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]
var new_arr = deepCopy(arr);
new_arr[3][1] = 'new2';
console.log(new_arr);
console.log(arr);