function ListNode(val) {
  this.val = val;
  this.next = null;
}
var swapPairs = function(head) {
  if (!head) {
    return null; //空链表， 没必要处理
  }

  var arr = []; //准备空数组
  while (head) { // 
    var next = head.next; //第二个结点
    head.next = null; // 清空  为第二个的指向不再指向原来的， 而为null
    arr.push(head); //head  链表变数组
    head = next; //头为第二个
  }

  var len = arr.length;
  
  for (var i = 0; i < len; i += 2) {// 每两个一对 互换
    var a = arr[i]; // a 前
    var b = arr[i + 1]; // b 后

    if (!b) //如果没有b了， 没得换
      continue;
    
    arr[i] = b;  // swap
    arr[i + 1] = a; //swap
  }

  for (var i = 0; i < len - 1; i++) //swap 后的数组， 重新链式化
    arr[i].next = arr[i+1]; 
  
  return arr[0];
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
n1.next = n2;
n2.next = n3;
n3.next = n4;

let head = swapPairs(n1);
while(head) {
  console.log(head.val);
  head = head.next;
}
// console.log(head);