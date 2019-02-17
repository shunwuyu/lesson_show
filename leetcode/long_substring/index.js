var lengthOfLongestSubstring = function(s) {
  var hash = {}; // 窗口， 
  var start = 0;
  var ans = 0;
  // 准备好循环， 从左至右找一遍， 最大的窗口
  for (var i = 0, len = s.length; i < len; i++) {
    var item = s[i];
    if (!hash[item]) {
      hash[item] = true;
    } else {
      //item 已经在substring 中存在了
      for (;;) {
        if (s[start] === item) {
          start++;
          break;
        }
        console.log(hash, i, s[start]);
        
        hash[s[start]] = false; //恢复重复字母之前的使用
        start++; //从start找到相同的那个位置
      }
    }
    // i - start + 1 本次无重复字符串的长度
    // 如果比之前的长，就更大 
    ans = Math.max(ans, i - start + 1);
  }

  return ans;
}

console.log(lengthOfLongestSubstring('abcabcbb'));