// let count2 = 0;
// function fn2(n) {
//   count2++;
//   if (n == 1 || n == 2) {
//     return 1;
//   }
//   return fn2(n-1) + fn2(n-2);
// } 

// console.log(fn2(20), count2);

let count = 0;

function fn(n) {
  let cache = {};
  function _fn(n) {
    if (cache[n]) {
      return cache[n];
    }
    count++;
    if (n == 1 || n == 2) {
      return 1;
    }
    
    let prev = _fn(n-1);
    cache[n-1] = prev;
    let next = _fn(n-2);
    cache[n-2] = next;
    return prev + next;
  }
  return _fn(n);
}

console.log(fn(20), count);