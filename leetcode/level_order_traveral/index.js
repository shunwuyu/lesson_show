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


function levelOrder(root) {
  if (!root) return []; //空数组
  var ans = [], 
    tmp = [root]; //tmp
  while(tmp.length) { //有值 t了mp 上一层的节点
    var res = [],
      a = [];
    for (var i = 0, len = tmp.length; i <len; i++) {
      if (!tmp[i]) continue;
      res.push(tmp[i].val);//根出队
      a.push(tmp[i].left);//将子结点放入新的数组
      a.push(tmp[i].right); //右结点放入
    }
    tmp = a.concat();
    if (res.length)
      ans.push(res);
  }

  return ans;
}