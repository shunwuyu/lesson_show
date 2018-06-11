class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty () {
    return !this.linkedList.tail;
  }

  peek () {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }

  enqueue (value) {
    this.linkedList.append(value);
  }

  dequeue () {
    const removeHead = this.linkedList.deleteHead();
    return removeHead ? removeHead.value : null;
  }

  toString (callback) {
    return this.linkedList.toString(callback);
  }

}