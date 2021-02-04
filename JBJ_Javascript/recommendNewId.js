function solution(new_id) {
  let answer = "";
  answer = new_id.toLowerCase(); // 1
  answer = answer.replace(/[^a-z0-9\-\.\_]/g, ""); // 2
  answer = answer.replace(/[.]+/g, ".").split(""); // 3

  if (answer[0] === ".") answer.splice(0, 1);
  if (answer[answer.length - 1] === ".") answer.splice(answer.length - 1, 1); // 4
  if (answer.length === 0) answer.push("a"); // 5
  if (answer.length > 15) {
    answer.splice(15);
    if (answer[answer.length - 1] === ".") answer.splice(answer.length - 1, 1);
  } // 6

  if (answer.length <= 2) {
    while (answer.length < 3) {
      answer.push(answer[answer.length - 1]);
    }
  } // 7

  return answer.join("");
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
