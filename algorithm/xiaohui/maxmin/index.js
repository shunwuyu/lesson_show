let arr = [2,3,1,4,6];

function mergeSort(arr) {
  return main(arr);

  function main(arr) {
    if (arr.length === 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(main(left), main(right));
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
  }
}


arr = mergeSort(arr);
let max = 0;
for(let i = 1; i < arr.length; i++) {
  // let max = 0;
  if (arr[i] - arr[i-1] > max) {
    max = arr[i] - arr[i-1];
  }
}
console.log(max);

