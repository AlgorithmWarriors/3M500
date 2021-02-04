function solution(n, money) {
  let answer = 0;
  let dp = [1];
  for (let ind = 0; ind < n; ind++) {
    dp.push(0);
  }
  money.forEach((elem, index) => {
    for (let ind = elem; ind <= n; ind++) {
      dp[ind] += dp[ind - elem];
    }
  });
  answer = dp[n] % 1000000007;
  return answer;
}

console.log(solution(5, [1, 2, 5]));
