function solution(numbers, hand) {
  let answer = "";
  let lastLeft = [0, 3];
  let lastRight = [2, 3];

  numbers.forEach((key) => {
    if (String(key).match(/[147]/)) {
      answer += "L";
      lastLeft = [0, (key - 1) / 3];
    }
    if (String(key).match(/[369]/)) {
      answer += "R";
      lastRight = [2, key / 3 - 1];
    }
    if (String(key).match(/[0258]/)) {
      let target = [1, key === 0 ? 3 : (key - 2) / 3];
      let thisThumb = "";
      const leftDist =
        Math.abs(lastLeft[0] - 1) + Math.abs(lastLeft[1] - target[1]);
      const rightDist =
        Math.abs(lastRight[0] - 1) + Math.abs(lastRight[1] - target[1]);

      if (leftDist === rightDist) thisThumb = hand === "right" ? "R" : "L";
      else {
        thisThumb = leftDist < rightDist ? "L" : "R";
      }
      if (thisThumb === "L") lastLeft = target;
      else lastRight = target;
      answer += thisThumb;
    }
  });

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
// LRLLLRLLRRL
