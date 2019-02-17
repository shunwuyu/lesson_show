const selectSort = (array) => {
  const originValues = array.slice(); //浅拷贝
  const length = originValues.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (originValues[j] < originValues[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const tmp = originValues[i];
      originValues[i] = originValues[minIndex];
      originValues[minIndex] = tmp;
    }
  }

  return originValues;
}

console.log(selectSort([7,2,5,1,9,6]));