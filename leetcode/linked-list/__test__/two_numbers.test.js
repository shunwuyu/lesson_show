import LinkedList from '../LinkedList';
import addTwoNumbers from '../two_number';
describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const listA = new LinkedList();
    listA.append(2);
    listA.append(4);
    listA.append(3);
    // Console.log(listA);
    expect(listA.toString()).toBe('2,4,3');
    const listB = new LinkedList();
    listB.append(5);
    listB.append(6);
    listB.append(4);
    expect(listB.toString()).toBe('5,6,4');
    let  node = addTwoNumbers(listA.head, listB.head);
    console.log(node.value);
    console.log(node.next.value);
    console.log(node.next.next.value);
    console.log(node.next.next.next, '---------------');
    const resultLinkedList = new LinkedList();
    while(node) {
      resultLinkedList.append(node);
      node = node.next;
    }
    console.log(resultLinkedList.reverse().toString());
    console.log(resultLinkedList.toString());
    // console.log(node.next.next.next.value);
    // console.log();
  })
}); 