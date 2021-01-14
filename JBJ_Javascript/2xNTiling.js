function solution(n) {
  let answer = 0;
  let dp = Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 2;
  for (let len = 2; len < n; len++) {
    dp[len] = (dp[len - 1] + dp[len - 2]) % 1000000007;
  }
  answer = dp[n - 1];
  return answer;
}
