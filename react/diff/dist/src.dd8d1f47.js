// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/react/create-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function createElement(tag, attrs) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  attrs = attrs || {};
  return {
    tag: tag,
    attrs: attrs,
    children: children,
    // ? key 
    key: attrs.key || null
  };
}

exports.default = createElement;
},{}],"src/react-dom/dom.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.setAttribute = setAttribute;
function setAttribute(dom, name, value) {
  // console.log(name, value);
  if (name === 'className') name = 'class';
  // console.log(name, dom);
  if (/on\w+/.test(name)) {
    name = name.toLowerCase();
    dom[name] = value || '';
  } else if (name === 'style') {
    console.log(typeof value === 'undefined' ? 'undefined' : _typeof(value));
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '';
    } else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      console.log(name, value);
      for (var _name in value) {
        dom.style[_name] = typeof value[_name] === 'number' ? value[_name] + 'px' : value[_name];
      }
    }
  } else {
    if (name in dom) {
      dom[name] = value || '';
    }
    if (value) {
      dom.setAttribute(name, value);
    } else {
      dom.removeAttribute(name, value);
    }
  }
}
},{}],"src/react-dom/diff.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.diff = diff;
exports.renderComponent = renderComponent;

var _react = require('../react');

var _dom = require('./dom');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {HTMLElement} dom 真实DOM
 * @param {vnode} vnode 虚拟DOM
 * @param {HTMLElement} container 容器
 * @returns {HTMLElement} 更新后的DOM
 */
function diff(dom, vnode, container) {

    var ret = diffNode(dom, vnode);

    if (container && ret.parentNode !== container) {
        container.appendChild(ret);
    }

    return ret;
}

function diffNode(dom, vnode) {

    var out = dom;

    if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';

    if (typeof vnode === 'number') vnode = String(vnode);

    // diff text node
    if (typeof vnode === 'string') {

        // 如果当前的DOM就是文本节点，则直接更新内容
        if (dom && dom.nodeType === 3) {
            // nodeType: https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
            if (dom.textContent !== vnode) {
                dom.textContent = vnode;
            }
            // 如果DOM不是文本节点，则新建一个文本节点DOM，并移除掉原来的
        } else {
            out = document.createTextNode(vnode);
            if (dom && dom.parentNode) {
                dom.parentNode.replaceChild(out, dom);
            }
        }

        return out;
    }

    if (typeof vnode.tag === 'function') {
        return diffComponent(dom, vnode);
    }

    //
    if (!dom || !isSameNodeType(dom, vnode)) {
        out = document.createElement(vnode.tag);

        if (dom) {
            [].concat(_toConsumableArray(dom.childNodes)).map(out.appendChild); // 将原来的子节点移到新节点下

            if (dom.parentNode) {
                dom.parentNode.replaceChild(out, dom); // 移除掉原来的DOM对象
            }
        }
    }

    if (vnode.children && vnode.children.length > 0 || out.childNodes && out.childNodes.length > 0) {
        diffChildren(out, vnode.children);
    }

    diffAttributes(out, vnode);

    return out;
}

function diffChildren(dom, vchildren) {

    var domChildren = dom.childNodes;
    var children = [];

    var keyed = {};

    if (domChildren.length > 0) {
        for (var i = 0; i < domChildren.length; i++) {
            var child = domChildren[i];
            var key = child.key;
            if (key) {
                keyedLen++;
                keyed[key] = child;
            } else {
                children.push(child);
            }
        }
    }

    if (vchildren && vchildren.length > 0) {

        var min = 0;
        var childrenLen = children.length;

        for (var _i = 0; _i < vchildren.length; _i++) {

            var vchild = vchildren[_i];

            var _key = vchild.key;
            var _child = void 0;

            if (_key) {

                if (keyed[_key]) {
                    _child = keyed[_key];
                    keyed[_key] = undefined;
                }
            } else if (min < childrenLen) {

                for (var j = min; j < childrenLen; j++) {

                    var c = children[j];

                    if (c && isSameNodeType(c, vchild)) {

                        _child = c;
                        children[j] = undefined;

                        if (j === childrenLen - 1) childrenLen--;
                        if (j === min) min++;
                        break;
                    }
                }
            }

            _child = diffNode(_child, vchild);

            var f = domChildren[_i];
            if (_child && _child !== dom && _child !== f) {
                if (!f) {
                    dom.appendChild(_child);
                } else if (_child === f.nextSibling) {
                    removeNode(f);
                } else {
                    dom.insertBefore(_child, f);
                }
            }
        }
    }
}

function diffComponent(dom, vnode) {

    var c = dom && dom._component;
    var oldDom = dom;

    // 如果组件类型没有变化，则重新set props
    if (c && c.constructor === vnode.tag) {
        setComponentProps(c, vnode.attrs);
        dom = c.base;
        // 如果组件类型变化，则移除掉原来组件，并渲染新的组件
    } else {

        if (c) {
            unmountComponent(c);
            oldDom = null;
        }

        c = createComponent(vnode.tag, vnode.attrs);

        setComponentProps(c, vnode.attrs);
        dom = c.base;

        if (oldDom && dom !== oldDom) {
            oldDom._component = null;
            removeNode(oldDom);
        }
    }

    return dom;
}

function setComponentProps(component, props) {

    if (!component.base) {
        if (component.componentWillMount) component.componentWillMount();
    } else if (component.componentWillReceiveProps) {
        component.componentWillReceiveProps(props);
    }

    component.props = props;

    renderComponent(component);
}

function renderComponent(component) {

    var base = void 0;

    var renderer = component.render();

    if (component.base && component.componentWillUpdate) {
        component.componentWillUpdate();
    }

    base = diffNode(component.base, renderer);

    component.base = base;
    base._component = component;

    if (component.base) {
        if (component.componentDidUpdate) component.componentDidUpdate();
    } else if (component.componentDidMount) {
        component.componentDidMount();
    }

    component.base = base;
    base._component = component;
}

function createComponent(component, props) {

    var inst = void 0;

    if (component.prototype && component.prototype.render) {
        inst = new component(props);
    } else {
        inst = new Component(props);
        inst.constructor = component;
        inst.render = function () {
            return this.constructor(props);
        };
    }

    return inst;
}

function unmountComponent(component) {
    if (component.componentWillUnmount) component.componentWillUnmount();
    removeNode(component.base);
}

function isSameNodeType(dom, vnode) {
    if (typeof vnode === 'string' || typeof vnode === 'number') {
        return dom.nodeType === 3;
    }

    if (typeof vnode.tag === 'string') {
        return dom.nodeName.toLowerCase() === vnode.tag.toLowerCase();
    }

    return dom && dom._component && dom._component.constructor === vnode.tag;
}

function diffAttributes(dom, vnode) {

    var old = {}; // 当前DOM的属性
    var attrs = vnode.attrs; // 虚拟DOM的属性

    for (var i = 0; i < dom.attributes.length; i++) {
        var attr = dom.attributes[i];
        old[attr.name] = attr.value;
    }

    // 如果原来的属性不在新的属性当中，则将其移除掉（属性值设为undefined）
    for (var name in old) {

        if (!(name in attrs)) {
            (0, _dom.setAttribute)(dom, name, undefined);
        }
    }

    // 更新新的属性值
    for (var _name in attrs) {

        if (old[_name] !== attrs[_name]) {
            (0, _dom.setAttribute)(dom, _name, attrs[_name]);
        }
    }
}

function removeNode(dom) {
    if (dom && dom.parentNode) {
        dom.parentNode.removeChild(dom);
    }
}
},{"../react":"src/react/index.js","./dom":"src/react-dom/dom.js"}],"src/react/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _diff = require("../react-dom/diff");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
  function Component() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Component);

    this.isReactComponent = true;
    this.state = {};
    this.props = props;
  }

  _createClass(Component, [{
    key: "setState",
    value: function setState(stateChange) {
      Object.assign(this.state, stateChange);
      // console.log(this.state);
      (0, _diff.renderComponent)(this);
    }
  }]);

  return Component;
}();

exports.default = Component;
},{"../react-dom/diff":"src/react-dom/diff.js"}],"src/react/index.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createElement = require('./create-element.js');

var _createElement2 = _interopRequireDefault(_createElement);

var _component = require('./component.js');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createElement: _createElement2.default,
  Component: _component2.default
};
},{"./create-element.js":"src/react/create-element.js","./component.js":"src/react/component.js"}],"src/react-dom/render.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _diff = require('./diff');

function render(vnode, container, dom) {
  return (0, _diff.diff)(dom, vnode, container);
}
exports.default = render;
},{"./diff":"src/react-dom/diff.js"}],"src/react-dom/index.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _render = require('./render');

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: _render2.default
};
},{"./render":"src/react-dom/render.js"}],"src/index.js":[function(require,module,exports) {
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('./react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('./react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      num: 1
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      console.log('will update');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('component did mount');
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log('did update');
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('will mount');
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      this.setState({ num: this.state.num + 1 });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'count:',
          this.state.num
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.onClick();
            } },
          'add'
        )
      );
    }
  }]);

  return Counter;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(
  'div',
  null,
  'hello',
  _react2.default.createElement(
    'span',
    { className: 'rt', onClick: 'console.log(\'zz\')', style: { fontSize: 20, fontWeight: 'bold' } },
    'world'
  ),
  _react2.default.createElement(Counter, null)
), document.getElementById('root'));
},{"./react":"src/react/index.js","./react-dom":"src/react-dom/index.js"}],"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '57505' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.dd8d1f47.map