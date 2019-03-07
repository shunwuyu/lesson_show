function ListNode(val) {
  this.val = val;
  this.next = null;
}

var oddEventList = function(head) {
  if (!head) {
    return null;
  }

  var odd = [];
  var even = [];

  var f = true; //odd even

  while(head) {
    var next = head.next;
    head.next = null;  //不再链式顺序指向

    if (f) {
      odd.push(head);
    } else {
      even.push(head);
    }

    f = !f;
    head = next;
  }

  for (var i = 0; i < odd.length - 1; i++) {
    odd[i].next = odd[i+1];
  }

  for ( var i = 0; i < even.length - 1; i++) {
    even[i].next = even[i+1];
  }

  odd[odd.length-1].next = even[0];
  return odd[0];
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

let head = newHead = oddEventList(n1);
while(head) {
  console.log(head.val);
  head = head.next;
}

