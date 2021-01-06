function solution(n) {
  let answer = "";
  let number = Number(n);

  while (number > 0) {
    switch (number % 3) {
      case 0:
        answer = "4" + answer;
        number = number / 3 - 1;
        break;
      case 1:
        answer = "1" + answer;
        number = Math.floor(number / 3);
        break;
      case 2:
        answer = "2" + answer;
        number = Math.floor(number / 3);
        break;
    }
  }

  return answer;
}

console.log(solution(40));
// 1111
