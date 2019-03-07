function insertSort(arr) {
  var len = arr.length;
  var preIndex,
   current;
  for (var i = 1; i < len; i++) { //未排好序的
    preIndex = i - 1; // 已排好序的
    current = arr[i];
    while(preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--; //一直找到它的位置
    }
    arr[preIndex+1] = current;  
  }
}