function solution(s) {
  let answer = 1;
  const length = s.length;
  const sToArr = s.split(""); // 1차원 배열
  let sToMatrix = Array.from(Array(length), () => new Array(length)); // 2차원 배열

  for (let ind = 0; ind < length; ind++) {
    sToMatrix[ind][ind] = 1;
  }

  for (let ind = 0; ind < length - 1; ind++) {
    if (sToArr[ind] === sToArr[ind + 1]) {
      sToMatrix[ind][ind + 1] = 1;
      answer = 2;
    }
  }

  for (let len = 3; len <= length; len++) {
    for (let start = 0; start <= length - len; start++) {
      let end = start + len - 1;
      if (
        sToArr[start] === sToArr[end] &&
        sToMatrix[start + 1][end - 1] === 1
      ) {
        sToMatrix[start][end] = 1;
        answer = len;
      }
    }
  }
  return answer;
}

console.log(solution("abcdcba"));

/*
a b c a d d a b c
1 0 0 1 0 0 1 0 0
	1 0 0 0 0 0 1 0
		1 0 0 0 0 0 1
			1 0 0 1 0 0
				1 1 0 0 0
					1 0 0 0
						1 0 0
							1 0
								1
*/
