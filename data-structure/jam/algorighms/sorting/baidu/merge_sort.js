const arr = [8, 7, 6, 5];
function mergeSort(arr) {
  console.time('MergeSort');
  let count = 0;
  return main(arr);
  function main(arr) {
    if (arr.length === 1)
      return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    // console.log(arguments.callee);
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let il = 0,
      rl = 0,
      result = [];
    while(il < left.length && rl < right.length) {
      if (left[il] < right[rl]) {
        result.push(left[il++]);
      } else {
        result.push(right[rl++]);
      }
    }
    

    return result.concat(left.slice(il)).concat(right.slice(rl));
    // console.log(left);
    // console.log(right);
    // console.log(left, right);
  }
}

console.log(mergeSort(arr));