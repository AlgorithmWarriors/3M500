function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);
  let left = 0;
  let right = people.length - 1;
  while (left < right) {
    if (people[left] + people[right] <= limit) {
      right--;
    }
    left++;
    answer++;
  }
  if (left === right) answer++;
  return answer;
}

console.log(solution([70, 50, 80, 50], 3));
