const TFCase = [
  "TTTT",
  "TTTF",
  "TTFT",
  "TTFF",
  "TFTT",
  "TFTF",
  "TFFT",
  "TFFF",
  "FTTT",
  "FTTF",
  "FTFT",
  "FTFF",
  "FFTT",
  "FFTF",
  "FFFT",
  "FFFF",
];

const makeCondtions = (info) => {
  const result = [];
  TFCase.forEach((elem) => {
    const elemArr = elem.split("");
    const temp = [];
    elemArr.forEach((item, index) => {
      if (item === "T") {
        temp.push(info[index]);
      } else {
        temp.push("-");
      }
    });
    result.push(temp.join(""));
  });
  return result;
};

const queryParsing = (query) => {
  const onlyCondition = query.split(" ").filter((elem) => elem !== "and");
  const queryScore = onlyCondition.pop();
  const queryCondition = onlyCondition.join("");
  return [queryCondition, queryScore];
};

const findLowerBound = (scores, target) => {
  let start = 0,
    end = scores.length - 1;
  if (Number(scores[end]) < target) return scores.length;
  if (start === end) {
    end = Number(scores[0]) > target ? 0 : 1;
  }
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (Number(scores[mid]) >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
};

function solution(info, query) {
  let answer = [];
  let infoObject = {};
  info.forEach((elem) => {
    let conditions = elem.split(" ");
    const score = conditions.pop();

    const conditionCases = makeCondtions(conditions);

    conditionCases.forEach((condition) => {
      if (infoObject[condition]) {
        infoObject[condition].push(score);
      } else infoObject[condition] = [score];
    });
  });

  query.forEach((elem) => {
    const [givenCondition, givenScore] = queryParsing(elem);
    if (infoObject[givenCondition] !== undefined) {
      const fitScores = infoObject[givenCondition].sort((a, b) => a - b);
      const lowerBound = findLowerBound(fitScores, givenScore);

      answer.push(fitScores.slice(lowerBound).length);
    } else answer.push(0);
  });

  return answer;
}

// console.log(
// 	givenCondition,
// 	givenScore,
// 	infoObject[givenCondition],
// 	lowerBound,
// 	fitScores.slice(lowerBound),
// 	fitScores.slice(lowerBound).length
// );
console.log(
  solution(
    [
      "java backend junior pizza 150",
      "java frontend senior pizza 210",
      "java frontend senior pizza 150",
      "java backend senior pizza 260",
      "java backend junior chicken 80",
      "java backend senior chicken 50",
    ],
    [
      "cpp and backend and junior and pizza 100",
      "python and frontend and senior and chicken 200",
      "cpp and - and senior and pizza 250",
      "- and backend and senior and - 150",
      "- and - and - and chicken 100",
      "- and - and - and - 300",
      "cpp and - and senior and pizza 500",
    ]
  )
);
