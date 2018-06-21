const ncname = '[a-zA-Z_][\\w\\-\\.]*';
const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
const singleAttrIdentifier = /([^\s"'<>/=]+)/
const singleAttrAssign = /(?:=)/
const singleAttrValues = [
  /"([^"]*)"+/.source,
  /'([^']*)'+/.source,
  /([^\s"'=<>`]+)/.source
]
const startTagOpen = new RegExp('^<' + qnameCapture);
const startTagClose = /^\s*(\/?)>/
const endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');

const attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
)

let index = 0;

function parse () {
  return parseHTML();
}

function parseStartTag () {
  const start = html.match(startTagOpen);
  if (start) {
    const match = {
      tagName: start[1],
      attrs: [],
      start: index
    }
    // console.log(start);
    
    advance(start[0].length);
    // console.log(html);
    let end, attr
    while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
      advance(attr[0].length)
      match.attrs.push({
          name: attr[1],
          value: attr[3]
      });
    }
    // console.log(html);
    // console.log(startTagClose);
    // while(!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
    //   match.attrs.push({
    //     name: attr[1],
    //     value: attr[3]
    //   });
    // }
    console.log(match);   
  }
}

function advance (n) {
  // console.log(n);
  index += n
  html = html.substring(n)
}

function parseHTML () {
  while(html) {
    let textEnd = html.indexOf('<');
    // console.log(textEnd);
    // 开始就是标签
    if (textEnd === 0) {
      const endTagMatch = html.match(endTag);
      if (endTagMatch) {
        continue;
      }
      if (html.match(startTagOpen)) {
        // console.log(html.match(startTagOpen)[0]);
        const startTagMatch = parseStartTag();
        
        return;
      }
    } else {
      console.log('aaa');
    }
  }
}

var html = '<div :class="c" class="demo" v-if="isShow"><span v-for="item in sz">{{item}}</span></div>';

const ast = parse();