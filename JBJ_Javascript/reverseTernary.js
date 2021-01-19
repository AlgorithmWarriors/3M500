function solution(n) {
  let answer = 0;
  let arr = [];
  while (n > 0) {
    arr.push(Math.floor(n % 3));
    n = Math.floor(n / 3);
  }
  for (let ind = arr.length - 1; ind >= 0; ind--) {
    answer += arr[ind] * Math.pow(3, arr.length - 1 - ind);
  }
  return answer;
}

console.log(solution(125));
