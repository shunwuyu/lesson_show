// 讲之前介绍filter
function unique(arr) {
  if (!Array.isArray(arr)) {
      console.log('type error!')
      return
  }
  return arr.filter((item,index) => {
    return arr.indexOf(item) === index;
  });
  // return Array.prototype.filter.call(arr, function(item, index) {
  //   return arr.indexOf(item) === index;
  // })
}

console.log(unique([1,2,3,2,1,4,5,3]));