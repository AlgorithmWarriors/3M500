function solution(board) {
  let answer = 0;
  board.forEach((line) => {
    if (line.includes(1) && !answer) answer = 1;
  });
  const rowLength = board.length;
  const colLength = board[0].length;
  let dpMatrix = Array.from(Array(rowLength).fill(0), () =>
    new Array(colLength).fill(0)
  );
  dpMatrix = [...board];
  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      if (board[row][col] != 0) {
        dpMatrix[row][col] =
          Math.min(
            dpMatrix[row - 1][col - 1],
            dpMatrix[row - 1][col],
            dpMatrix[row][col - 1]
          ) + 1;
        answer = Math.max(answer, dpMatrix[row][col]);
      }
    }
  }
  return answer * answer;
}

console.log(
  solution([
    [1, 0],
    [0, 0],
  ])
);
