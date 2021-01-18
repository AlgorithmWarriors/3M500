function solution(n, works) {
  let answer = 0;

  const sorted = [...works].sort((a, b) => b - a);
  console.log(sorted);

  let index = 0;
  while (n > 0) {
    if (sorted[index] < sorted[index + 1]) {
      index++;
      continue;
    }
    if (sorted[index - 1] === sorted[index]) {
      index = 0;
      continue;
    }
    if (sorted[index] - 1 < 0) break;
    sorted[index]--;
    n--;
  }

  answer = sorted.reduce((acc, cur) => acc + cur * cur, 0);
  return answer;
}

console.log(solution(3, [1, 1]));
console.log("--------------------");
console.log(solution(4, [4, 3, 3, 3]));
