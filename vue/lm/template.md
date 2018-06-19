## compile
  parse optimize 与generate 三个阶段， render function。 

  parse 正则 字符串解析, 指令， class, style 等数据， 形成AST（抽象语法树）

  {
    'attrsMap': {
      ':class': 'c',
      'class': 'demo',
      'v-if': 'isShow'
    },
    'classBinding': 'c',
    'if': 'isShow',
    'ifConditions': [
      {
        'exp': 'isShow'
      }
    ],
    'staticClass': 'demo',
    'tag': 'div',
    'children': [
      {
        'attrsMap': {
          'v-for': 'item in sz'
        },
        'alias': 'item',
        'for': 'sz',
        'forProcessed': true,
        'tag': 'span',
        children: [
          {
            'expression': '_s(item)',
            'text': '{{item}}'
          }
        ]
      }
    ]
  }

  const ncname = '[a-zA-Z_][\\w\\-\\.]*';
  const singleAttrIdentifier = /([^\s"'<>/=]+)
  

  function advance(n) {
    index += n;
    html = html.substring(n)
  }