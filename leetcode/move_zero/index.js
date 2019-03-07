var moveZeroes = function(nums) {
  for (var i = nums.length; i--;) {
    if (!nums[i]) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
}