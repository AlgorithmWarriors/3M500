function solution(skill, skill_trees) {
  let answer = 0;

  const regex = new RegExp(`[^${skill}]`, "g");
  answer = skill_trees
    .map((elem) => elem.replace(regex, ""))
    .filter((elem) => skill.indexOf(elem) === 0 || elem === "").length;
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
