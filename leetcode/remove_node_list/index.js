// 链表
function ListNode(val) {
  this.val = val;
  this.next = null; 
}

var removeNthFromEnd = function(head, n) {
  var arr = [];
  while(head) {
    arr.push(new ListNode(head.val));
    head = head.next;
  }
  arr.splice(-n, 1); //splice 从后移除
  for (var i = 0, len = arr.length; i < len -1; i++)
    arr[i].next = arr[i + 1];

  return arr.length === 0 ? null: arr[0];
}


const node1 = new ListNode(1);
const node2 = new ListNode(2);
node1.next = node2;
const node3 = new ListNode(3);
node2.next = node3;
const node4 = new ListNode(4);
node3.next = node4;
const node5 = new ListNode(5);
node4.next = node5;
let head = removeNthFromEnd(node1, 2);
console.log(head);
while(head) {
  console.log(head.val);
  head = head.next;
}