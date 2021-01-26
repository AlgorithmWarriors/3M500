function solution(orders, course) {
  let answer = [];

  let combis = [];
  orders.forEach((elem, index) => {
    orders[index] = elem.split("").sort().join("");
  });
  orders.forEach((elem) => {
    const splitElem = elem.split("");
    for (let ind = 0; ind < Math.pow(2, splitElem.length); ind++) {
      let temp = "";
      for (let secInd = 0; secInd < splitElem.length; secInd++) {
        if (ind & Math.pow(2, secInd)) temp += splitElem[secInd];
      }
      combis.push(temp);
    }
    combis = combis.filter((elem) => course.includes(elem.length));
  });

  let counts = combis.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  let cntNoOne = [];
  for (let [key, value] of Object.entries(counts)) {
    if (value != 1) cntNoOne.push([key, value]);
  }

  course.forEach((length) => {
    let tempAsLength = cntNoOne.filter((elem) => elem[0].length === length);
    let maxCount = tempAsLength.sort((a, b) => b[1] - a[1])[0];
    maxCount = maxCount ? maxCount[1] : 0;
    let pushItem = tempAsLength.filter((elem) => elem[1] === maxCount);
    pushItem.forEach((elem) => {
      answer.push(elem[0]);
    });
  });

  return answer.sort();
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
