function createElement(tag, attrs, ...children) {
  attrs = attrs || {};
  return {
    tag,
    attrs,
    children,
    // ? key 
    key: attrs.key || null
  }
}

export default createElement;