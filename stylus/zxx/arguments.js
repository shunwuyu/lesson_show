function sum() {
  let n = 0;
  for(let i = 0; i < arguments.length; i++) {
    n += arguments[i] 
  }
  return n;
}

console.log(sum(1,2,3,4,5,6))