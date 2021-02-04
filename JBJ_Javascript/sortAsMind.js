function solution(strings, n) {
  let answer = [];
  answer = strings.sort((a, b) => {
    return a[n] === b[n] ? (a > b) - (a < b) : (a[n] > b[n]) - (a[n] < b[n]);
  });
  return answer;
}

console.log(solution(["sun", "bed", "car"], 1));
