// 实现一个栈， 带有出栈， 入栈， 取最小元素的三个方法， 
// 保证时间复杂度都是O(1)
function Stack() {
  this.items = [];
  this.min = -1;
}

Stack.prototype.push = function(element, fn) {
  if (this.isEmpty()) {
    this.min = 0;
    fn(this.min);
  } else {
    let top = this.peek();
    if (element < top) {
      this.min = this.items.length;
      fn(this.min);
    }
  }
  this.items.push(element);
} 

Stack.prototype.pop = function() {
  return this.items.pop();
}

Stack.prototype.peek = function() {
  return this.items[this.items.length - 1];
}

Stack.prototype.isEmpty = function() {
  return this.items.length === 0;
}

Stack.prototype.clear = function() {
  this.items = [];
}

Stack.prototype.size = function() {
  return this.items.length;
}

Stack.prototype.toString = function() {
  console.log(this.items.toString());
}

Stack.prototype.getMin = function() {
  return this.min;
}

function push_cb (index) {
  min_stack.push(index);
}

function pop_cb (index) {
  if (stack.length - 1 === min_stack.peek()) {
    min_stack.pop();
  }
}

const stack = new Stack();
const min_stack = new Stack();
stack.push(10, push_cb);
stack.push(12, push_cb);
stack.push(9, push_cb);
stack.push(14, push_cb);
stack.push(7, push_cb);
// console.log(stack.getMin());
console.log(min_stack.toString());