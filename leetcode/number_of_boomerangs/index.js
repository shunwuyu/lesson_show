var numberOfBoomerangs = function(points) {
  let len = points.length;
  let ans = 0;
  for (let i = 0; i < len; i++) {
    let p = new Map();
    for (let j = 0; j < len; j++) {
      if (i === j) continue;
      let dis = getDis(i, j);
      let count = ~~p.get(dis); //取整
      ans += count;
      p.set(dis, count + 1);
    }
  }

  return ans * 2;

  function getDis(i, j) {
    return (points[i][0] - points[j][0]) * (points[i][0] - points[j][0])
        + (points[i][1] - points[j][1]) * (points[i][1] - points[j][1]);
  }
}

console.log(numberOfBoomerangs([[0,0], [1,0], [2,0], [3,0], [0, 3]]));