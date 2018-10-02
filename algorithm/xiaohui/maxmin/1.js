function arrDiff(arr) {
  let max = min = arr[0];
  let len = arr.length;
  for (i = 0; i < len; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  let d = Math.floor((max-min)/len);

  const newArr = new Array(len+1);
  for(let i = 0; i < arr.length; i++) {
    const pos = Math.floor(arr[i]/d);
    // console.log(pos);
    // newArr[pos]
    if (!newArr[pos]) {
      newArr[pos] = [];
    }
    newArr[pos].push(arr[i]);
  }
  console.log(newArr);
  let s=e=0, result= 0;
  for(let i = 0; i < newArr.length; i++) {
    if (!newArr[i]) {
      if (i > 0 && newArr[i-1] && newArr[i-1].length) {
        s = newArr[i-1][newArr[i-1].length-1];
        
      }
      if (i < newArr.length && newArr[i+1]&& newArr[i+1].length) {
        e = newArr[i+1][0];
      }
    }
    if (result < e-s) {
      result = e-s;
    }
  }

  // console.log(newArr);
  console.log(result);


}

arrDiff([0, 6, 3, 16, 7, 10, 9, 11, 20, 18]);