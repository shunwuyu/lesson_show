class BinaryTreeNode {
  constructor (value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;
  }
  setLeft(node) {
    if (this.left) {
      this.left.parent = null;
    }
    this.left = node;
    if (this.left) {
      this.left.parent = this;
    }
    return this;
  }
  setRight(node) {
    // Reset parent for right node since it is going to be detached.
    if (this.right) {
      this.right.parent = null;
    }

    // Attach new node to the right.
    this.right = node;

    // Make current node to be a parent for new right one.
    if (node) {
      this.right.parent = this;
    }

    return this;
  }
  traverseInOrder() {
    let traverse = [];

    // Add left node.
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }

    // Add root.
    traverse.push(this.value);

    // Add right node.
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }

    return traverse;
  }
  toString() {
    return this.traverseInOrder().toString();
  }
}

class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value = null) {
    super(value);
  }
  contains(value) {
    return !!this.find(value);
  }
  insert(value) {
    if (!this.value) {
      this.value = value;
      return this;
    }

    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value);
      }
      const newNode = new BinarySearchTreeNode(value);
      this.setLeft(newNode);
      return newNode;
    }
    if (value > this.value) {
      if (this.right) {
        return this.right.insert(value);
      }
      const newNode = new BinarySearchTreeNode(value);
      this.setRight(newNode);
      return newNode;
    }
    return this;
  }
  find (value) {
    if (this.value == value) {
      return this;
    }
    // 找左子树
    if (this.value > value && this.left) {
      return this.left.find(value);
    }
    if (this.value < value) {
      return this.right.find(value);
    }

    return;
  }
}


class BinarySearchTree {
  constructor() {
    this.root = new BinarySearchTreeNode(null);
    // console.log(this.root);
  }
  insert(value) {
    return this.root.insert(value);
  }
  toString() {
    return this.root.toString();
  }
  contains(value) {
    return this.root.contains(value);
  }
}

const bst = new BinarySearchTree();
const insertedNode1 = bst.insert(10);
const insertedNode2 = bst.insert(20);
bst.insert(5);
console.log(bst.toString());
console.log(bst.contains(11));