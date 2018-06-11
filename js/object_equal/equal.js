function eq(a, b) {
  // +0 , -0   a !== 0 不是 0 的情况
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // NaN 不相等  b 也是Nan
  if (a !== a) return  b !== b;
  // typeof null 为 object
  if (a == null || b == null) return false;
  // NaN
  if (a !== a) return b !== b;

  var type = typeof a;
  // 怎么判断一个元素是基本类型
  if (type !== 'function' && type !== 'object' && typeof b !== 'object') return false;
  console.log(a, b);
  return deepEq(a, b);
}

function isFunction(obj) {
  return toString.call(obj) === '[object Function]'
}

function deepEq(a, b) {
  var className = toString.call(a);
  if (className !== toString.call(b)) return false;
  switch (className) {
    case '[object RegExp]':
    case '[object String]':
      return '' + a === '' + b;
    case '[object Number]':
      if (+a !== +a) return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b;
  }
  var isArray = className === '[object Array]';
  
  if (!isArray) {
    // console.log(typeof a);
    if (typeof a != 'object' || typeof b != 'object') return false;
  }
  var aCtor = a.constructor,
  bCtor = b.constructor;
  console.log(aCtor == bCtor);
  if (aCtor == bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && ('constructor' in a && 'constructor' in b)) {
    return false;
  }
  
  if (isArray) {
    var length = a.length;
    if (length != b.length) return false;
    while(length--) {
      if (!eq(a[length], b[length])) return false;
    }
  } else {
    var keys = Object.keys(a), key;
    length = keys.length;
    if (Object.keys(b).length !== length) return false;

    while(length--) {
      key = keys[length];
      if (!(b.hasOwnProperty(key) && eq(a[key], b[key]))) return false;
    }
  }
  return true;
}

// console.log(eq([1], [1]));
// console.log(eq({value:1}, {value:2}));

// console.log(deepEq(NaN, NaN));

function Person(name) {
  this.name = name;
}

function Animal(name) {
  this.name = name
}

console.log(deepEq({a:1}, {a:1, b: 2}));