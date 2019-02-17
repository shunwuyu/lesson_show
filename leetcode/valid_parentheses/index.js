var isValid = function(s) {
  var sta = [], //数组是天生的栈
    target = {};
  target['('] = ')';  //准备消除规则
  target['['] = ']';
  target['{'] = '}';
  for (var i = 0, len = s.length; i < len; i++) {
    if (!sta.length) sta.push(s[i]); //空栈， 先入栈元素
    else { // 非空， 则准备比对
      if (s[i] === target[sta[sta.length - 1]]) //待入栈字符， 与栈顶元素是否满足target消除关系
        sta.pop();
      else
        sta.push(s[i]); //
    }
  }
  return !sta.length; //数组空了， 就是valid, 否则未匹配成功
}

console.log(isValid('{[]}'));