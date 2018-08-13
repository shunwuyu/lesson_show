function getMaxDif(arr) {
  let max = min = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      // console.log(arr[])
      min = arr[i];
    } 
    if (arr[i] > max) {
      max = arr[i]
    }
  } 
  // console.log(max, min);
  const newArr = new Array(max-min + 1);
  // console.log(newArr.length);
  for(let i = 0; i < arr.length; i++) {
    newArr[arr[i]-min] = arr[i];
  }

  console.log(newArr);
  let result = k = 0;
  for (let i = 0; i < newArr.length; i++) {
    // let k = 0;
    // console.log(newArr[i]);
    if (!newArr[i]) {
      k++;
      // console.log(k);
    } else {
      if (k> result) {
        result = k;
        k = 0;
      }
    }
  }
  return result;
}

// 该解法的时间复杂度为O（n+k），空间复杂度同样是O（n+k）

getMaxDif([2, 6, 3, 4, 5, 10, 9]);
