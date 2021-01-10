function solution(arr) {
  let answer = 1;
  let maxDp = Array.from(Array(200), () => new Array(200).fill(-999999));
  let minDp = Array.from(Array(200), () => new Array(200).fill(1000001));

  const numberCount = Math.floor(arr.length / 2) + 1;
  // 대각선(n,n)으로 arr의 숫자만 넣음
  for (let index = 0; index < numberCount; index++) {
    maxDp[index][index] = Number(arr[index * 2]);
    minDp[index][index] = Number(arr[index * 2]);
  }

  // 대각선으로 가른 2차원 배열의 윗 부분만 쓸거임
  // calCount: 연산 횟수
  for (let calCount = 1; calCount < numberCount; calCount++) {
    for (let row = 0; row < numberCount - calCount; row++) {
      const col = row + calCount;
      for (let index = row; index < col; index++) {
        if (arr[index * 2 + 1] === "+") {
          maxDp[row][col] = Math.max(
            maxDp[row][col],
            maxDp[row][index] + maxDp[index + 1][col]
          );
          minDp[row][col] = Math.min(
            minDp[row][col],
            minDp[row][index] + minDp[index + 1][col]
          );
        } else if (arr[index * 2 + 1] === "-") {
          maxDp[row][col] = Math.max(
            maxDp[row][col],
            maxDp[row][index] - minDp[index + 1][col]
          );
          minDp[row][col] = Math.min(
            minDp[row][col],
            minDp[row][index] - maxDp[index + 1][col]
          );
        }
      }
    }
  }
  /*
	1 2 3 4 5 
		1 2 3 4
			1 2 3
				1 2
					1
	위와 같은 순서로 채워지므로 0번째 열의 numberCount-1번째 행이 최댓값
	 */
  answer = maxDp[0][numberCount - 1];

  return answer;
}

console.log(solution(["5", "-", "3", "+", "1", "+", "2", "-", "4"]));
