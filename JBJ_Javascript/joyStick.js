function solution(name) {
  let answer = 0;
  let upDownCount = [];
  const nameArr = name.split("");

  nameArr.forEach((elem) => {
    upDownCount.push(
      Math.min(
        elem.charCodeAt(0) - "A".charCodeAt(0),
        "Z".charCodeAt(0) - elem.charCodeAt(0) + 1
      )
    );
  });

  let index = 0;
  while (true) {
    answer += upDownCount[index];
    upDownCount[index] = 0;
    let sumOfArr = upDownCount.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    if (sumOfArr === 0) break;
    let left = 0,
      right = 0,
      leftIndex = index,
      rightIndex = index;
    while (upDownCount[leftIndex] <= 0) {
      left++;
      if (leftIndex <= 0) leftIndex = upDownCount.length - 1;
      else leftIndex--;
    }
    while (upDownCount[rightIndex] <= 0) {
      right++;
      rightIndex = (rightIndex + 1) % upDownCount.length;
    }
    answer += left < right ? left : right;
    index = left < right ? leftIndex : rightIndex;
  }

  return answer;
}

console.log(solution("JEROEN"));
