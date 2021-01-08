function solution(n) {
  let answer = [];
  let matrix = Array.from(Array(n).fill(0), () => new Array(n).fill(0));
  let number = 0,
    x = 0,
    y = 0;
  let direction = 0; // 0:DOWN, 1:RIGHT, 2:DIAGONAL
  const maxCount = (n * (n + 1)) / 2;
  while (++number <= maxCount) {
    matrix[y][x] = number;
    switch (direction) {
      case 0:
        if (y + 1 >= n || matrix[y + 1][x] !== 0) {
          direction = 1;
          x++;
        } else y++;
        break;
      case 1:
        if (x + 1 >= n || matrix[y][x + 1] !== 0) {
          direction = 2;
          y -= 1;
          x -= 1;
        } else x++;
        break;
      case 2:
        if (y - 1 < 0 || matrix[y - 1][x - 1] !== 0) {
          direction = 0;
          y++;
        } else {
          y -= 1;
          x -= 1;
        }
        break;
    }
  }
  matrix.forEach((elem) => answer.push(elem));
  answer = answer.flat().filter((elem) => elem !== 0);
  return answer;
}

console.log(solution(4));
// [ 1, 2, 9, 3, 10, 8, 4, 5, 6, 7 ]
