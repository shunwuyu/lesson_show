function TreeNode(val) {
  this.val = val;
  this.left = this.right = null; 
}

var ans, res;

function dfs(root) {
  if (!root) return;

  res.push(root.val);

  if (!root.left && !root.right) {
    var str = res.reduce(function(pre, item) {
      return pre + '->' + item;
    });

    str = str.toString();

    ans.push(str);
    console.log(res);
    res.pop();
    return;
  }

  if (root.left) 
    dfs(root.left);
  
  if (root.right)
    dfs(root.right);

  // console.log(res);
  res.pop(); // 完成了一条路径的节点退出
}

var binaryTreePaths = function(root) {
  ans = [], res = [];
  dfs(root);
  return ans;
};

let n1 = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(5);
n1.left = n2;
n1.right = n3;
n2.right = n4;

console.log(binaryTreePaths(n1));


