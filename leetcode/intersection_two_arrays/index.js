var intersection = function(nums1, nums2) {
  var hash = {};
  
  nums1.forEach(function(item) {
    hash[item] = 1;
  });

  nums2.forEach(function(item) {
    if (hash[item]) {
      hash[item] = 2;
    }
  });

  var ans = [];
  for (var k in hash)
    hash[k] === 2 && (ans.push(+k));

  return ans;
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
