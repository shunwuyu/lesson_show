function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var isSameTree = function(p, q) {
  //把不能比较的情况
  if (p === null && q === null) return true;
  if (p === null && q !== null) return false;
  if (p !== null && q === null) return false;

  if (p.val !== q.val) return false;

  var  a = isSameTree(p.left, q.left),
    b = isSameTree(p.right, q.right);
  
  return a && b;
}

let n1 = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
n1.left = n2;
n1.right = n3;

let r1 = new TreeNode(1);
let r2 = new TreeNode(2);
let r3 = new TreeNode(3);
r1.left = r2;
r1.right = r3;

console.log(isSameTree(n1, r1));