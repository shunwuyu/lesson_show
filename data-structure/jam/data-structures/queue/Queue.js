import LinkedList from "../linked-list/LinkedList";

export default class Queue {
  constructor () {
    this.linkedList = new LinkedList();
  }

  enqueue (value) {
    this.linkedList.append(value);
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }

  dequeue () {
    const removedHead = this.linkedList.deleteHead();
    // console.log(removedHead);
    return removedHead ? removedHead.value : null;
  }

  peek () {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }

  isEmpty () {
    return !this.linkedList.tail;
  }
  

}