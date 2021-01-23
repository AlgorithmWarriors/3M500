function solution(record) {
  let answer = [];
  let uidName = {};
  record = record.map((elem) => elem.split(" "));

  record.forEach((line) => {
    if (line.length === 3) {
      uidName[line[1]] = line[2];
    }
  });
  record.forEach((line) => {
    if (line[0] === "Enter")
      answer.push(`${uidName[line[1]]}님이 들어왔습니다.`);
    else if (line[0] === "Leave")
      answer.push(`${uidName[line[1]]}님이 나갔습니다.`);
  });

  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 aa",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
    "Enter uid1 JBJ",
  ])
);
