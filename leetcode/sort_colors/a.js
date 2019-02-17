var sortColors = function(nums) {
  var left = 0; // left 左侧的位置在哪
  var right = nums.length - 1; //右侧的位置在哪
  var cur = 0; //当前在哪

  while (cur <= right) {
    if (nums[cur] == 0) { //当前值为0
      if (cur == left) { // 左边已调整好了
        // 位置是OK的
        left++;
        cur++; //继续做
      } else { // left < cur 
        var dd = nums[cur];
        nums[cur] = nums[left];
        nums[left] = dd;
        cur++;
        left++;
      }
    } else if (nums[cur] == 1) {
      cur++;
    } else if (nums[cur] == 2) {
      var dd = nums[right];
      nums[right] = nums[cur];
      nums[cur] = dd;
      right--;
    }
  }
}