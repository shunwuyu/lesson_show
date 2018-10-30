export const dateFormat = (d, pattern = 'yyyy-MM-dd') => {
  let y = d.getFullYear().toString(),
    o = {
      M: d.getMonth() + 1,
      d: d.getDate(),
      h: d.getHours(),
      m: d.getMinutes(),
      s: d.getSeconds()
    }
  // console.log(y, o);
  // pattern = 'yy年-MM-dd';
  // 几个y
  pattern = pattern.replace(/(y+)/gi, function(a, b) {
    // console.log(y.substr(4 - Math.min(4, b.length)));
    return y.substr(4- Math.min(4, b.length));
  })
  for (let i in o) {
    pattern = pattern.replace(new RegExp('(' + i + '+)', 'g'), function(a, b) {
      return o[i] < 10 && b.length > 1 ? '0' + o[i] : o[i]
    })
  }
  // console.log(pattern);
  return pattern;
}