var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

let Math = (_class = class Math {
  add(a, b) {
    return a + b;
  }

}, (_applyDecoratedDescriptor(_class.prototype, "add", [log], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype)), _class);

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function () {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}

const math = new Math();
console.log(math.add(2, 4));
