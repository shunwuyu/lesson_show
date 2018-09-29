function find(target, arr) {
  let i = 0;
  let j = arr[i].length -1;
  while(i < arr.length && j >= 0) {
    console.log(arr[i][j]);
    if (arr[i][j] < target) {
      i ++ ;
    } else if (arr[i][j] > target) {
      j -- ;
    } else {
      return true;
    }
  }
  return false;
}

console.log(find(10, [
  [1,2,3,4],
  [5,9,10,11],
  [13,20,21,23]
]));

