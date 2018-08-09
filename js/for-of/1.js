// const colors = ["red", "green", "blue"];
// for (var i = 0, len = colors.length; i < len; i++) {
//   console.log(colors[i]);
// }
// 数组长度， 声明索引变量等， 嵌套循环时， 会使用多个索引变量， 代码的复杂度大大增加。 

function unique(array) {
  const res = [];
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++) {
      if (array[i] === res[j]) {
        break;
      }
    }
    if (j === resLen) {
      res.push(array[i]);
    }
  }
  return res;
}

//