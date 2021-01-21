function solution(arr) {
  const answer = arr.filter((elem, index) => elem != arr[index + 1]);
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
