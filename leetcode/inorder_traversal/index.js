// binary tree node
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// 递归就可以了
function dfs(root, ans) {
  if (!root) return;  //空树
  dfs(root.left, ans);
  ans.push(root.val); //任何一个节点都可以是父节点， 
  dfs(root.right, ans);
}

var inorderTraversal = function(root) {
  var ans = []; //返回一个数组
  dfs(root, ans);
  return ans;
}

let n1 = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);
n1.right = n2;
n2.left = n3;
n3.left = n4;
n3.right = n5;
const orderArr = inorderTraversal(n1);
console.log(orderArr);
for(let node of orderArr) {
  console.log(node);
}