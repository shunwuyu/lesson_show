import LinkedList from '../linked-list/LinkedList';
import LinkedListNode from '../linked-list/LinkedListNode';

export default class Stack {
  constructor () {
    this.linkedList = new LinkedList();
  }
  push (value) {
    this.linkedList.append(value);
  }
  
  peek () {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.tail.value;
  }

  pop () {
    const removedTail = this.linkedList.deleteTail();
    return removedTail ? removedTail.value : null;
  }

  toArray () {
    return this.linkedList
      .toArray()
      .map(linkedListNode => linkedListNode.value)
      .reverse();
  }

  isEmpty () {
    return !this.linkedList.tail;
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}