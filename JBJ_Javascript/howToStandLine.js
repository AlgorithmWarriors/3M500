function solution(n, k) {
  let answer = [];
  let arr = Array.from({ length: n }, (_, index) => index + 1);
  let factorialValue = arr.reduce((acc, cur) => acc * cur, 1);
  k -= 1;
  while (answer.length != n) {
    factorialValue = factorialValue / arr.length;
    let target = arr[Math.floor(k / factorialValue)];
    answer.push(target);
    arr.splice(arr.indexOf(target), 1);
    k = k % factorialValue;
  }
  return answer;
}

console.log(solution(3, 5));
