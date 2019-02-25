import LinkedList from './LinkedList';
import LinkedListNode from './LinkedListNode';
export default function addTwoNumbers(l1, l2) {
  const dummyHead = new LinkedListNode(0);
  let p = l1, q = l2, curr = dummyHead;
  let carry = 0;
  while (p != null || q != null) { //位数不一致
      let  x = (p != null) ? p.value : 0;
      let y = (q != null) ? q.value : 0;
      let sum = carry + x + y; //上一次进位
      carry = Math.floor(sum / 10); // 进多少位
      // console.log(sum % 10);
      curr.next = new LinkedListNode(sum % 10); // 显示值
      curr = curr.next; // 取下一个结点
      if (p != null) p = p.next; 
      if (q != null) q = q.next;
  }
  if (carry > 0) { // 如果还有进位
      curr.next = new LinkedListNode(carry);
  }
  return dummyHead.next;
}