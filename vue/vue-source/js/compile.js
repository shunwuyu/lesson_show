class Compile {
  constructor (el, vm) {
    this.vm = vm;
    this.el = document.querySelector(el);
    // 文档碎片
    // 模板无法编译， 过程， 从外到内，编译出来的一段的html node , 
    // append到 this.el, 性能很低, 代替this.el, 做的主人 
    // 最后再一次性的更新到真实的DOM 
    this.fragment = null;
    this.init();
  }
  init () {
    // this.el 它将会被编译后的html 替换
    if (this.el) {
      this.fragment = this.nodeToFragment(this.el);
      this.compileElement(this.fragment);
      this.el.appendChild(this.fragment);
    } else {
      console.log('DOM元素不存在');
    }
  }
  // 递归调用， 一层层往里走， 
  compileElement (el) {
    var childNodes = el.childNodes;
    // console.log([].slice.call(childNodes));
    [].slice.call(childNodes).forEach(node => {
      // console.log(node);
      var reg = /\{\{(.*)\}\}/;
      var text = node.textContent;
      // console.log(text);
      // 如果是结点， 指令的编译
      if (this.isElementNode(node)) {
        // console.log(node);
        this.compile(node);
      } else if (this.isTextNode(node) && reg.test(text)) {
        // console.log(node, reg.exec(text), reg.exec(text)[1]);
        console.log(node);
        console.log(reg.exec(text)[1])
        this.compileText(node, reg.exec(text)[1]);
      }

      if (node.childNodes && node.childNodes.length) {
        this.compileElement(node);
      }
    })
  }
  compileText(node, Exp) {
    var initText = this.vm[Exp];
    console.log(this.vm);
    this.updateText(node, initText);
  }
  updateText (node, value) {
    // console.log(value);
    node.textContent = typeof value === 'undefined' ? '' : value

  }
  compile (node) {
    // 指令？
    var nodeAttrs = node.attributes;
    Array.prototype.forEach.call(nodeAttrs, attr => {
      var attrName = attr.name;
      // console.log(attrName);
      if (this.isDirective(attrName)) {
        var exp = attr.value;
        var dir = attrName.substring(2);
        // on
        if (this.isEventDiretive(dir)) {
          this.compileEvent(node, this.vm, exp, dir);
        } else {
          // v-model
        }
      }
    })
  }
  compileEvent (node, vm, exp, dir) {
    // 什么事件？event
    // callback ?
    // v-on:click="doClick"
    const eventType = dir.split(':')[1];
    var cb = vm.methods && vm.methods[exp];
    if (eventType && cb) {
      node.addEventListener(eventType, cb.bind(vm), false);
    }
  }
  isDirective (attr) {
    return attr.indexOf('v-') == 0
  }
  isEventDiretive(dir) {
    return dir.indexOf('on:') == 0
  }
  isElementNode (node)  {
    return node.nodeType == 1;
  }
  isTextNode (node) {
    return node.nodeType == 3;
  }
  nodeToFragment (el) {
    var fragment = document.createDocumentFragment();
    var child = el.firstChild;
    while(child) {
      fragment.appendChild(child);
      child = el.firstChild
    }
    return fragment;
  }
}