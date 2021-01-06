function solution(board, moves) {
  let answer = 0;
  let dollStack = [];

  moves.forEach((move) => {
    let targetDoll = 0;

    for (let ind = 0; ind < board.length; ind++) {
      if (board[ind][move - 1] !== 0) {
        targetDoll = board[ind][move - 1];
        board[ind][move - 1] = 0;
        break;
      }
    }

    if (targetDoll !== 0) {
      dollStack.push(targetDoll);
      const stackLength = dollStack.length;
      if (dollStack[stackLength - 1] === dollStack[stackLength - 2]) {
        dollStack.pop();
        dollStack.pop();
        answer += 2;
      }
    }
  });

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
// 4
