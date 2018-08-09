import HeapSort from '../HeapSort';
import {
  SortTester
} from '../../SortTester';

describe('HeapSort', () => {
  it('should sort array', () => {
    SortTester.testSort(HeapSort);
  })
})