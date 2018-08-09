const obj = {
  value: 1
};

function createIterator(items) {
  var i = 0;
  return {
      next: function() {
          var done = i >= items.length;
          var value = !done ? items[i++] : undefined;

          return {
              done: done,
              value: value
          };
      }
  };
}

obj[Symbol.iterator] = function() {
  return createIterator([1, 2, 3]);
};

for (value of obj) {
  console.log(value);
}