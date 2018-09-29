"use strict";

var React = {
  createElement: createElement
};
function createElement(tag, attrs) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    tag: tag,
    attrs: attrs,
    children: children
  };
}

var element = React.createElement("div", null, "hello", React.createElement("span", null, "world!"));

// console.log(element);

var ReactDOM = {
  render: function render(vnode, container) {
    container.innerHTML = '';
    return _render(vnode, container);
  }
};
function _render(vnode, container) {
  if (typeof vnode === 'string') {
    var textNode = document.createTextNode(vnode);
    return container.appendChild(textNode);
  }
  var dom = document.createElement(vnode.tag);
  if (vnode.attr) {
    Object.keys(vnode.attrs).forEach(function (key) {
      if (key === 'className') key = 'class';
      dom.setAttribute(key, vnode.attr[key]);
    });
  }
  vnode.children.forEach(function (child) {
    return _render(child, dom);
  });
  return container.appendChild(dom);
}

ReactDOM.render(React.createElement(
  "h1",
  null,
  "Hello, world!"
), document.getElementById('root'));
