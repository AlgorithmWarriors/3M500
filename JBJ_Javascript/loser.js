function solution(participant, completion) {
  let answer = "";
  participant.sort();
  completion.sort();

  for (let ind = 0; ind < completion.length; ind++) {
    if (completion[ind] !== participant[ind]) {
      answer = participant[ind];
      break;
    }
  }
  return answer;
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
// mislav
