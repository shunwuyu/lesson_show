const ReactDOM = {
  render: (vnode, container) => {
    container.innerHTML = '';
    return render(vnode, container);
  }
}
function render(vnode, container) {
  if (typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode);
    return container.appendChild(texrtNode);
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

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);