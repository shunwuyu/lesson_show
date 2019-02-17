function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * 
 * @param {TreeNode} root
 * @return {number[]} 
 */
var rightSideView = function(root) {
  if (!root) return [];
  // console.log(root, '----------------');
  var ans = []
    , tmp = [root];
  // console.log(tmp);
  while(tmp.length) {
    var res = []
      , a = [];
    for (var i = 0, len = tmp.length; i < len; i++) { // 每层来
      if (!tmp[i]) continue; //为空， 退出
      res.push(tmp[i].val); // 入数组
      a.push(tmp[i].left); // 
      a.push(tmp[i].right);
    }
  
    tmp = a.concat(); 
    console.log(res);
    if (res.length)
      ans.push(res);
  }

  console.log(ans);
  var a = [];
  ans.forEach(function(item) {
    // 数组的pop做这事，  只要最右边的
    a.push(item.pop());
  })
  return a;
};

let n1 = new TreeNode(3);
let n2 = new TreeNode(9);
let n3 = new TreeNode(20);
let n4 = new TreeNode(15);
let n5 = new TreeNode(7);
n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

console.log(rightSideView(n1));