function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function dfs(root, ans) {
  if (!root) return;
  dfs(root.left, ans);
  ans.push(root.val);
  dfs(root.right, ans);
}

//中序遍历, 左中右
var inorderTraversal = function(root) {
  var ans = [];
  dfs(root, ans);
  return ans;
}