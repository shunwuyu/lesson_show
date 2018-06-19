var html = '<div :class="c" class="demo" v-if="isShow"><span v-for="item in sz">{{item}}</span></div>';
// 字符串里的转义
const ncname = '[a-zA-Z_][\\w\\-\\.]*';
const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
// console.log('^<\\/' + qnameCapture + '[^>]*>');
const endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');


function parseHTML () {
  while (html) {
    let textEnd = html.indexOf('<');
    // console.log(textEnd);
    if (textEnd === 0) {
      const endTagMatch = html.match(endTag);
      if (endTagMatch) {
        console.log('ddd');
        continue;
      }
    }
  }
} 

function parse () {
  return parseHTML();
}

const ast = parse();