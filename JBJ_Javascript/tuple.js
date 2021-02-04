function solution(s) {
  const arr = s
    .substring(2, s.length - 2)
    .split("},{")
    .map((elem) => elem.split(","))
    .sort((a, b) => a.length - b.length);

  let answer = [...arr[0]];

  for (let ind = 1; ind < arr.length; ind++) {
    for (let item of answer) {
      arr[ind] = arr[ind].filter((elem) => elem !== item);
    }
    answer.push(...arr[ind]);
  }
  return answer.map((elem) => parseInt(elem));
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
