function BinarySearchTree () {
  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  var root = null;

  var insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  }

  this.insert = function (key) {
    var newNode = new Node(key);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  }

  //左侧结点， 父节点， 右侧子节点
  var inOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  }

  var preOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  }

  var postOrderTraverseNode = function(node, callback) {
    if (node!== null) {
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  var maxNode = function(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key
    }
    return null;
  }

  var minNode = function(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  }

  var searchNode = function(node, key) {
    if (node === null) {
      return false;
    }

    if (node < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  }

  var findMinNode = function(node) {
    if (node) {
      while(node.left !== null) {
        node = node.left;
      }
      return node;
    }
    return null;
  }

  var removeNode = function(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      // 叶节点， 直接删除
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // 如果这个结点有右子树， 直接将右子树代替这个结点，
      // 让它的父节点的此节点变成它的右节点
      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      var aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  }

  //中序遍历， 从小到大
  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback);
  }

  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback);
  }

  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback);
  }

  this.max = function() {
    return maxNode(root);
  }

  this.min = function() {
    return minNode(root); 
  }
  this.search = function(key) {
    return searchNode(root, key);
  }

  this.remove = function(key) {
    root = removeNode(root, key);
  }
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
var printNode = function(val) {
  console.log(val);
};

tree.inOrderTraverse(printNode);
console.log('-------------\n');
tree.preOrderTraverse(printNode);
console.log('-------------\n');
tree.postOrderTraverse(printNode);
console.log('----------\n');
console.log(tree.max());
console.log('----------\n');
console.log(tree.min());
console.log('----------\n');
console.log(tree.search(13));
console.log('----------\n');
tree.remove(7);
// 11 -> 7 正好相等， 右子树的最小值
console.log('----------\n');
tree.inOrderTraverse(printNode);
