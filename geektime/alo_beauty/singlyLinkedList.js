class Node {
  constructor(element) {
    this.elment = element
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = new Node('head')
  }
  insert (newElement, element) {
    const currentNode = this.findByValue(element)
    
  }
  findByValue (index) {
    let currentNode = this.head
    let pos = 0
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next
    }
    console.log(currentNode);
    return currentNode === null ? -1 : currentNode
  }
}