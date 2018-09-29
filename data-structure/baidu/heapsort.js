// 快排序是应用性最强的排序算法， 堆排序是趣味性最强的排序方法，
// 把数组做为二叉树而得名， 是归并排序的改良方案,原地排序方法，但是不够稳定。 O(nlogn).

// 1 由数组构造一个堆结构， 满足父节点总是大于或小于其子节点。
// 2 最右边的叶子节点开始， 从右至左， 从下至上， 与根节点交换， 每次交换
// 后， 再次构建堆结构。 

function heapSort(arr) {
  console.time('HeapSort');
  buildHeap(arr);
  return arr;
  function buildHead(arr) {
    let mid = Math.floor(arr.length/2);
    for(let i = mid; i >= 0; i--) {
      heapify(arr, arr.length, i);
    }
    return arr;
  }

  function heapify(arr, heapSize, i) {
    let left = 2 * i + 1;
    right = 2* i + 2,
    largest = i;
    if (left < heapSize && arr[left] < arr[largest]) {
      largest = left;
    }
    if (right < heapSize && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [arr[largest], arr[i]] = [arr[i], arr[largest]];
      arguments.callee(arr, heapSize, largest);
    }
    return arr;
  }
}