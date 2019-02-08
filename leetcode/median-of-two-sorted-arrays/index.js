var findMedianSortedArrays = function(nums1, nums2) {
  var m = nums1.length;
  var n = nums2.length;
  var total = m + n;
  var half = total >> 1; //右移相当于/2
  // console.log(m, n, total, half);
  console.log(total & 1); 
  // js 中&是位运算符， && 是逻辑运算符
  if (total & 1) {  //一定是奇数
    return findKth(nums1, m, nums2, n, half + 1); //half + 1 中间这个数
  } else {
    return (findKth(num21, m, nums2, n, half) + findKth(nums1, m, nums2, n, half + 1)) / 2;
  }
}

function findKth(a, m, b, n, k) {
  
}

console.log(findMedianSortedArrays([1, 2], [3, 4, 5, ]));