var reverseString = function(s) {
  if (s === null)
    return s;
  
  return s.split('').reverse().join('');
}

console.log(reverseString('hello'));
//数组的内置reverse方法
