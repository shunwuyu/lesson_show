const generateArray = require('./generate.js'); 

function bubbleSort(arr) {
  let len  = arr.length;
  for (let i = 0; i < len; i++) {
    // 每一项与下一项相比较
    for (let j = 0; j < len -1 - i;j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
      }
    }
  }
  // console.log(arr);
  return arr;
}

const arr = generateArray(10);
// console.log(arr);
console.log(bubbleSort(arr));