var shallowCopy = function(obj) {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

var arr = [function() {
  console.log(a)
}, {
  b: function() {
    console.log(b)
  }
}]

var new_arr = shallowCopy(arr);
console.log(new_arr);

