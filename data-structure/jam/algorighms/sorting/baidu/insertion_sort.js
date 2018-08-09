function insertionSort(arr) {
  let len = arr.length;
  for(let i = 1; i < len; i++) {
    let j = i;
    let tmp = arr[i];
    while(j > 0 && arr[j-1] > tmp) {
      arr[j] = arr[j-1];
      j--;
    }
    arr[j] = tmp;
  }
  return arr;
}

var arr = [2,1,3,5,4,3]
console.log(insertionSort(arr));