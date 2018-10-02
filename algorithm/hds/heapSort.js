function heapSort(array) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  function maxHeapify(array, index, heapSize) {
    var iMax,
      iLeft,
      iRight;
    while (true) {
      iMax = index;
      iLeft = 2 * index + 1;
      iRight = 2 * (index + 1);
      if (iLeft < heapSize && array[index] < array[iLeft]) {
        iMax = iLeft;
      }
      if (iRight < heapSize && array[iMax] < array[iRight]) {
        iMax = iRight;
      }
      if (iMax != index) {
        swap(array, iMax, index);
        index = iMax;
      } else {
        break;
      }
    }
  }
  function buildMaxHeap(array) {
    var i,
      iParent = Math.floor(array.length / 2) - 1;
    for (i = iParent; i >= 0; i--) {
      console.log(i, array.length);
      maxHeapify(array, i, array.length);
    }
  }
  function sort(array) {
    buildMaxHeap(array);
    // for (var i = array.length - 1; i > 0; i--) {
    //   swap(array, 0, i);
    //   maxHeapify(array, 0, i);
    // }
    return array;
  }
  return sort(array);
}

var arr = [46,12,33,72,68,19,80,33];

console.log(heapSort(arr));