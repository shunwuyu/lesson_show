const utils = {
  debounce (method, context, event, delay) {
    clearTimeout(method.tId);
    method.tId = setTimeout(() => {
      method.call(context, event);
    }, delay);
  },
  throttle (method, context, delay) {
    let wait = false;
    return function(...args) {
      if (!wait) {
        method.apply(context, args);
        wait = true;
        setTimeout(() => {
          wait = false
        }, delay);
      }
    }
  },
  getWheelDelta (event) {
    if (event.wheelDelta) {
      this.getWheelDelta = event => event.wheelDelta;
      return event.wheelDelta
    }
    this.getWheelDelta = event => -event.detail;
    return -event.detail;
  },
  deleteClassName (el, className) {
    if (el.classList.contains(className)) {
      el.classList.remove(className);
    }
  },
  polyfill () {
    if (typeof Object.assign !== 'function') {
      Object.defineProperty(Object, 'assign', {
        value: function assign(target) {
          if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
          }
          const to = Object(target);
          for (let index = 1; index < arguments.length; index++) {
            const nextSource = arguments[index];
            if (nextSource !== null) {
              for (const nextKey in nextSource) {
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }
          return to;
        },
        writable: true,
        configurable: true
      })
    }
  }
}