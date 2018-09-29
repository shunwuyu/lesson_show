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

var element = React.createElement(
  "div",
  null,
  "hello",
  React.createElement(
    "span",
    null,
    "world!"
  )
);

// console.log(element);

const ReactDOM = {
  render: (vnode, container) => {
    container.innerHTML = '';
    return render(vnode, container);
  }
}
function render(vnode, container) {
  if (typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode);
    return container.appendChild(textNode);
  }
  const dom = document.createElement(vnode.tag);
  if (vnode.attr) {
    Object.keys(vnode.attrs).forEach(key => {
      if (key === 'className') key = 'class';
      dom.setAttribute(key, vnode.attr[ key ]);
    });
  }
  vnode.children.forEach(child => render(child, dom));
  return container.appendChild(dom); 
}

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}
setInterval(tick, 1000);
