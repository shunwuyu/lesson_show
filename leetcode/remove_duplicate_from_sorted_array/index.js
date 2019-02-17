var removeDuplicates = function(nums) {
  var ans = 0; //不重复项的计数
  for (var i = nums.length; i--;) {
    if (i === nums.length - 1) //最后一个
      ans++; // 最后这个 没得比
    else if (nums[i] === nums[i+1]) //重复 , 前一项跟后一项相比
      nums.splice(i, 1) //删除 
    else
      ans++; // 不重复
  }
  return ans;
}