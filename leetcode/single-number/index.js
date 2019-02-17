var signleNumber = function(nums) {
  var ans = 0;
  for (var i = 0, len = nums.length; i < len; i++) {
    ans ^= nums[i];
  }

  return ans;
}
