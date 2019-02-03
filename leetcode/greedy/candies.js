// https://leetcode-cn.com/problems/distribute-candies/description/
// https://github.com/hanzichi/leetcode/blob/master/Algorithms/Distribute%20Candies/distribute-candies.js
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  let p = new Map();
  for (let item of candies) {
    p.set(item, ~~p.get(item) + 1)
  }
  console.log(p.values());
  let res = [...p.values()].sort((a, b) => a - b);
  return Math.min(res.length, candies.length >> 1);
};

// console.log(distributeCandies([1,1,2,2,3,3]));
console.log(distributeCandies([1,1,2,3]));