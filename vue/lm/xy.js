function observer (value) {
  if (!value || (typeof value !== 'object')) {
    return;
  }

  Object.keys(value).forEach((key) => {
    defineReactive(value, key, value[key]);
  });
}

function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      return val;
    },
    set: function reactiveSetter (newVal) {
      if (newVal === val) return;
      cb(newVal);
    }
  })
}

function cb (val) {
  console.log("视图更新啦〜", val);
}

class Vue {
  constructor(options) {
    this._data = options.data;
    observer(this._data);
  }
}

let o = new Vue({
  data: {
    test: "I am  a test."
  }
});
o._data.test = 'hello, test.';
