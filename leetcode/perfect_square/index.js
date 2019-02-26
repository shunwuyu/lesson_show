var numSquares = function(n) {
  var dp = [];

  for (var i = 1; i <= n; i++) {
    dp[i] = Infinity;
  }

  dp[0] = 0; //最后是O
  // console.log(dp.length);

  for (var i = 0; i <= n; i++) {
    // console.log(dp[i]);
    for (var j = 1; ; j++) {
      if (i + j*j > n) break; //由哪些完全平方数构成
      
      dp[i + j*j] = Math.min(dp[i + j*j], dp[i] + 1); //用最小的
      // console.log(i, j, j*j, i + j*j, dp[i], dp[i + j*j] ); 
      // console.log(dp);
    }
  }

  // console.log(dp);
  return dp[n];
}

console.log(numSquares(1314));