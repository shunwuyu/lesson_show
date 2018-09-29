'use strict';

var ReactDOM = {
  render: function render(vnode, container) {
    container.innerHTML = '';
    return _render(vnode, container);
  }
};
function _render(vnode, container) {
  if (typeof vnode === 'string') {
    var textNode = document.createTextNode(vnode);
    return container.appendChild(texrtNode);
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
  'h1',
  null,
  'Hello, world!'
), document.getElementById('root'));
