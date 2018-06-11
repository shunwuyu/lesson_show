class Stack {
  constructor () {
    this.linkedList = new LinkedList();
  }

  isEmpty () {
    // 尾结点没值
    return !this.linkedList.tail;
  }

  // 最后结点的值
  peek () {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.tail.value;
  }

  push (value) {
    this.linkedList.append(value);
  }

  pop () {
    const removedTail = this.linkedList.deleteTail();
    return removedTail ? removedTail.value : null;
  }

  // 赞, 用数组的reverse 来做赞
  toArray () {
    return this.linkedList
    .toArray()
    .map(linkedListNode => linkedListNode.value)
    .reverse();
  }

  toString (callback) {
    return this.linkedList.toString(callback)
  }

}