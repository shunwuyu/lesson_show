function ListNode(val) {
  this.val = val;
  this.next = null;
}

var partition = function(head, x) {
  var tmp = [],
    ans = [];
  
    while(head) {
      tmp.push(new ListNode(head.val));
      head = head.next;
    }

    tmp.forEach(function(item) {
      if (item.val < x) {
        ans.push(item)
      }
    });

    tmp.forEach(function(item) {
      if (item.val >= x)
        ans.push(item);
    });

    if (!ans.length) return null;
    for (var i = 0, len = ans.length; i < len - 1; i++ ) {
      ans[i].next = ans[i + 1];
    }
    return ans[0];
}

let n1 = new ListNode(1);
let n2 = new ListNode(4);
let n3 = new ListNode(3);
let n4 = new ListNode(2);
let n5 = new ListNode(5);
let n6 = new ListNode(2);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;


let head = partition(n1, 3);
while(head) {
  console.log(head.val);
  head = head.next;
}