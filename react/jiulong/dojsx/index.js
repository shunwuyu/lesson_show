const React = {
  createElement
}
function createElement(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children
  }
}

const element = (
  <div>
    hello<span>world!</span>
  </div>
);

console.log(element)