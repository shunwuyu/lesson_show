// 物理存储单元上非连续，非顺续的存储结构，数据元素的逻辑顺序是通过链表中的指针次序实现的。
// 由一系列结点， 数据数据据， 下一个结点的指针域。 
// 插入时O(1)
// 看片
// 优点： 通过索引可以很快地访问数组元素；
// 缺点：插入删除元素需要对数组进行调整， 效率低。 

// 插入， 删除速度很快， 不用对整个链表调整。
// 缺点： 只能进行顺序访问， 不能随机访问
// 所以，链表在一些需要快速插入／删除，而不太关心或者不需要随机访问的情况下使用

const Comparator = require('../utils/comparator.js');
// console.log(new Comparator());

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  toString(callback) {
    return callback?callback(this.value):`${this.value}`
  }
}

// @param {Function} [comparatorFunction]

class LinkedList {
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  // @param {*} value
  // @return {linkedList}
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tial) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // If the head must be deleted then make 2nd node to be a head.
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      // If next node must be deleted then make next node to be a next next one.
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Check if tail must be deleted.
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }


  find({ value = undefined, callback = undefined}) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    while(currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode
      }
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  deleteTail() {
    if (this.head === this.tail) {
      const deletedTail = this.tail;
      this.head = null;
      this.tail = null;
      return deletedTail
    }

    const deletedTail = this.tail;
    let currentNode = this.head;
    while(currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    return deletedTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;
    
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while(currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }
}

// 空链表
// const likedList = new LinkedList();
// console.log(likedList.toString());
// console.log(likedList.head);
// console.log(likedList.tail);
// likedList.append(1);
// likedList.append(2);
// console.log(likedList.toString());
// likedList.prepend(3);
// console.log(likedList.toString());

// 删除链表
// const linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(3);
// linkedList.append(4);
// linkedList.append(5);

// const deleteNode = linkedList.delete(3);
// console.log(linkedList.toString());

// const linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// const node = linkedList.find({ value: 2});
// console.log(node);

// const linkedList = new LinkedList();

// linkedList
//   .append({ value: 1, key: 'test1' })
//   .append({ value: 2, key: 'test2' })
//   .append({ value: 3, key: 'test3' })

// const node = linkedList.find({callback: value => value.key === 'test2'});
// console.log(node);