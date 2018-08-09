export const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export const reverseArr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
export const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
export const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
export const negativeArr = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
export const negativeArrSorted = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];

export class SortTester {
  static testSort(SortingClass) {
    const sorter = new SortingClass();
    expect(sorter.sort([])).toEqual([]);
    expect(sorter.sort([1])).toEqual([1]);
    expect(sorter.sort([1,2])).toEqual([1,2]);
    expect(sorter.sort([2,1])).toEqual([1,2]);
    expect(sorter.sort([3,4,2,1,0,0,4,3,4,2])).toEqual([0,0,1,2,2,3,3,4,4,4]);
    expect(sorter.sort(sortedArr)).toEqual(sortedArr);
    expect(sorter.sort(reverseArr)).toEqual(sortedArr);
    expect(sorter.sort(notSortedArr)).toEqual(sortedArr);
    expect(sorter.sort(equalArr)).toEqual(equalArr);
  }
}