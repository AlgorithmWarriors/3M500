function solution(genres, plays) {
  let answer = [];
  const playCounts = genres.map((genre, index) => {
    return { genre, index, count: plays[index] };
  });

  const genreCounts = genres.reduce((acc, cur, index) => {
    acc[cur] = acc[cur] === undefined ? plays[index] : acc[cur] + plays[index];
    return acc;
  }, {});

  const sortedPlayCounts = playCounts.sort((a, b) => {
    if (a.genre != b.genre) return genreCounts[b.genre] - genreCounts[a.genre];
    else if (a.genre === b.genre) {
      return b.count - a.count;
    }
  });

  let pushItem = { genre: "", count: 0 };
  sortedPlayCounts.forEach((elem) => {
    if (elem.genre !== pushItem.genre) {
      pushItem.count = 0;
    }
    if (pushItem.count < 2) {
      answer.push(elem.index);
      pushItem.genre = elem.genre;
      pushItem.count++;
    }
  });

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
