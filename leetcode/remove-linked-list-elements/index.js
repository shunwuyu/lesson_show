function ListNode(val) {
  this.val = val;
  this.next = null;
}

var removeElements = function(head, val) {
  var ans = []; //数组

  while(head) { //遍历链表
    ans.push(new ListNode(head.val)); //将链表转成了数组, splice
    head = head.next;
  }
  for (var i = ans.length; i--;) {
    if (ans[i].val === val) 
      ans.splice(i, 1);
  }

  if (!ans.length)
    return null;
  
  for (var i = 0, len = ans.length; i < len - 1; i++) {
    ans[i].next = ans[i+1]; //数组具有按顺序设定next 的能力 
  }
  
  return ans[0];
}

let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(6);
let n4 = new ListNode(3);
let n5 = new ListNode(4);
let n6 = new ListNode(5);
let n7 = new ListNode(6);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;

let head = removeElements(n1, 6);
while(head) {
  console.log(`${head.val}->`);
  head = head.next;
}
