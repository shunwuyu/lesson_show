import { setAttribute } from './dom' 

function createComponent(component, props) {
  let inst;

  if (component.prototype && component.prototype.render) {
    inst = new component(props);
  } else {
    // inst = new Component(props);
  }
  return inst;
}

function setComponentProps(component, props) {
  renderComponent(component);
}

export function renderComponent( component ) {
  let base;
  const renderer = component.render();
  // console.log(renderer);
  base = _render(renderer);
  // console.log(base)
  component.base = base;
  base._component = component;
}

function _render (vnode) {
  if ( vnode === undefined || vnode === null  || typeof vnode === 'boolean' ) vnode = ''
  if (typeof vnode === 'number') vnode = String(vnode);
  if (typeof vnode === 'string') {
    let textNode = document.createTextNode(vnode);
    return textNode;
  }

  if (typeof vnode.tag === 'function') {
    // return;
    const component = createComponent( vnode.tag, vnode.attrs );
    console.log(component);
    setComponentProps(component, vnode.attrs);
    console.log(component.base)
    return component.base;
  }

  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      setAttribute(dom, key, value);
    });
  }
  
  if (vnode.children) {
    vnode.children.forEach(child => render(child, dom));
  }



  return dom;
}


export function render (vnode, container) {
  return container.appendChild(_render(vnode));
}