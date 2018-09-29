class Stack {
  constructor() {
    this.items = [];
    this.min = -1;
    this.isCurrentMin = false;
  }
  isEmpty () {
    return this.items.length === 0;
  }
  size () {
    return this.items.length;
  }

  push (element ) {
    
    if (this.isEmpty()) {
      this.min = 0;
      this.isCurrentMin = true;
    } else {
      if (element < this.peek()) {
        this.min = this.size();
        this.isCurrentMin = true;
      } else {
        this.isCurrentMin = false;
      }
    }
    this.items.push(element);
  }
  pop (element) {
    this.items.pop(element);
  }
  peek () {
    return this.items[this.items.length - 1];
  }
  toString () {
    return this.items.toString();
  }
}



const stack = new Stack();
const min_stack = new Stack();
stack.push(10);
if (stack.isCurrentMin)
  min_stack.push(stack.size() -1);
stack.push(12);
if (stack.isCurrentMin)
  min_stack.push(stack.size() -1);
stack.push(9);
if (stack.isCurrentMin)
  min_stack.push(stack.size() -1);
stack.push(14);
if (stack.isCurrentMin)
  min_stack.push(stack.size() -1);
stack.push(7);
if (stack.isCurrentMin)
  min_stack.push(stack.size() -1);
// console.log(stack.getMin());
console.log(min_stack.toString());
stack.pop(7);
if (min_stack.peek() === stack.size()) {
  min_stack.pop();
}
console.log(min_stack.peek());
