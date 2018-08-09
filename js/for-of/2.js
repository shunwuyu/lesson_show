function createIterator(items) {
  var i = 0;
  return {
    next: function() {
      var done = i >= items.length;
      var value = !done ? items[i++]: undefined;
      return {
        done,
        value
      }
    }
  }
}

// var iterator = createIterator([1,2,3]);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// var iterator = createIterator([1, 2, 3]);

// for (let value of iterator) {
//   console.log(value);
// }

// const iterator = [1,2,3];
const obj = {
  value: 1
}
obj[Symbol.iterator] = function() {
  return createIterator([1,2,3]);
}
// for 对象有问题， 加 Symbol.iterator
for (value of obj) {
  console.log(value);
}

// Symbol.iterator属性
// 1. 数组
// 2. Set
// 3. Map
// 4. 类数组对象
// 5. Generator对象
// 6. 字符串