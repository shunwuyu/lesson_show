import LinkedList from './LinkedList';
import LinkedListNode from './LinkedListNode';
export default function addTwoNumbers(l1, l2) {
  const dummyHead = new LinkedListNode(0);
  let p = l1, q = l2, curr = dummyHead;
  let carry = 0;
  while (p != null || q != null) {
      let  x = (p != null) ? p.value : 0;
      let y = (q != null) ? q.value : 0;
      let sum = carry + x + y;
      carry = Math.floor(sum / 10);
      // console.log(sum % 10);
      curr.next = new LinkedListNode(sum % 10);
      curr = curr.next;
      if (p != null) p = p.next;
      if (q != null) q = q.next;
  }
  if (carry > 0) {
      curr.next = new LinkedListNode(carry);
  }
  return dummyHead.next;
}