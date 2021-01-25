function solution(lines) {
  let answer = 0;
  const logTimeArr = [];
  const timesArr = [];

  lines.forEach((line) => {
    const splitLine = line.split(" ");
    const time = splitLine[1];
    const endTimeSec =
      Number(time.substring(0, 2)) * 3600 +
      Number(time.substring(3, 5)) * 60 +
      Number(time.substring(6, 12));

    const duration = Number(splitLine[2].substring(0, splitLine[2].length - 1));

    const startTimeSec = endTimeSec - duration + 0.001;

    logTimeArr.push({ start: startTimeSec, end: endTimeSec });
    timesArr.push(startTimeSec, endTimeSec);
  });
  timesArr.sort();

  timesArr.forEach((elem) => {
    const rangeStart = elem;
    const rangeEnd = elem + 1;
    let count = 0;
    logTimeArr.forEach((time) => {
      if (
        (time.start >= rangeStart && time.start < rangeEnd) || // 시작점이 범위 내에 있을 때
        (time.end >= rangeStart && time.end < rangeEnd) || // 끝점이 범위 내에 있을 때
        (time.start <= rangeStart && time.end >= rangeEnd) // 범위가 시작점과 끝점 내에 있을 때
      ) {
        count++;
      }
      if (count > answer) answer = count;
    });
  });

  return answer;
}

console.log(
  solution([
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s",
  ])
);
// 7
