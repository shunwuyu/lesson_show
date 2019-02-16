function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let n1 = new TreeNode(3);
let n2 = new TreeNode(9);
let n3 = new TreeNode(20);
let n4 = new TreeNode(15);
let n5 = new TreeNode(7);

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

function zigzagLevelOrder(root) {
  var maxn = -1; 
  var ans = [];

  dfs(root, 0);

  function dfs(node, step) {
    if (!node)
      return;
    // maxn 记下有多少层 左右两个， 每两次才会长一下
    maxn = step > maxn ? step: maxn; 
    console.log(maxn);
    if (!ans[step])
      ans[step] = []; // 二维数组
    
    ans[step].push(node.val);
    dfs(node.left, step + 1);
    dfs(node.right, step + 1);
  }

  // 最后来做翻转处理， 偶数位翻转
  for (var i = 0; i <= maxn; i++) 
    (i & 1 ) && (ans[i].reverse());
  
  return ans;
}

console.log(zigzagLevelOrder(n1));