var arr = [2,1,3,5,4,3];

function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i;
    let tmp = arr[i];  //当前项
    // 向左边比较
    while(j > 0 && arr[j-1] > tmp) {
      // 向右移
      arr[j] = arr[j-1];
      j--;
    }
    // 退出时， 让j = 当前项
    arr[j] = tmp;
  }
  return arr;
}

console.log(insertionSort(arr));