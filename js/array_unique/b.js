function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i])
    }
  }
  return res
}

console.log(unique([1,2,3,2,1,4,5,3]));