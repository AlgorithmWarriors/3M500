function solution(land, height) {
  class unionFind {
    constructor(elements) {
      this.count = elements.length;
      this.parent = {};
      elements.forEach((elem) => (this.parent[elem] = elem));
    }

    union(a, b) {
      const rootA = this.findRoot(a);
      const rootB = this.findRoot(b);

      if (rootA.root === rootB.root) {
        return false;
      }
      if (rootA.size > rootB.size) {
        this.parent[rootB.root] = rootA.root;
        return true;
      } else {
        this.parent[rootA.root] = rootB.root;
        return true;
      }
    }

    findRoot(item) {
      let cnt = 0;
      let info = {};
      let tmp;
      while (this.parent[item] !== item) {
        tmp = item;
        item = this.parent[item];
        this.parent[tmp] = this.parent[item];
        cnt++;
      }
      info["root"] = item;
      info["size"] = cnt;
      return info;
    }
  }
  class Kruskal {
    constructor(nodes, edges) {
      this.nodes = new unionFind(nodes);
      this.edges = edges;
      this.graph = [];
    }

    mst() {
      while (this.edges.length > 0) this.findmin();
      return this.graph;
    }

    findmin() {
      this.edges.sort(function (a, b) {
        return a[2] - b[2];
      });
      var min = this.edges.shift();
      var result = this.nodes.union(min[0], min[1]);
      if (result) {
        this.graph.push(min);
      }
    }
  }

  const groupedMap = Array.from(Array(land.length).fill(0), () =>
    new Array(land.length).fill(0)
  );
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  function BFS(land, height, x, y, num) {
    const queue = [[y, x]];
    groupedMap[y][x] = num;
    while (queue.length !== 0) {
      const x = queue[0][1];
      const y = queue[0][0];
      queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < land.length && ny < land.length) {
          if (
            groupedMap[ny][nx] === 0 &&
            Math.abs(land[y][x] - land[ny][nx]) <= height
          ) {
            groupedMap[ny][nx] = num;
            queue.push([ny, nx]);
          }
        }
      }
    }
  }
  let answer = 0;
  let number = 1;
  const edgeSub = [];
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land.length; j++) {
      if (groupedMap[i][j] === 0) BFS(land, height, j, i, number++);
    }
  }
  for (let y = 0; y < land.length; y++) {
    for (let x = 0; x < land.length; x++) {
      for (let ind = 0; ind < 4; ind++) {
        const nx = x + dx[ind];
        const ny = y + dy[ind];
        if (nx >= 0 && ny >= 0 && nx < land.length && ny < land.length) {
          if (groupedMap[y][x] !== groupedMap[ny][nx]) {
            edgeSub.push([
              Math.abs(land[y][x] - land[ny][nx]),
              [groupedMap[y][x], groupedMap[ny][nx]].sort((a, b) => a - b),
            ]);
          }
        }
      }
    }
  }

  const minimumSub = [];
  for (let from = 1; from <= number - 1; from++) {
    for (let to = from + 1; to <= number; to++) {
      const filteredEdgeSubs = edgeSub
        .filter((elem) => elem[1][0] === from && elem[1][1] === to)
        .sort((a, b) => a[0] - b[0])[0];
      if (filteredEdgeSubs === undefined) continue;
      minimumSub.push([from, to, filteredEdgeSubs[0]]);
    }
  }
  const kruskal = new Kruskal([1, 2, 3], minimumSub);
  const graph = kruskal.mst();

  graph.forEach((elem) => (answer += elem[2]));

  return answer;
}

console.log(
  solution(
    [
      [10, 11, 10, 11],
      [2, 21, 20, 10],
      [1, 20, 21, 11],
      [2, 1, 2, 1],
    ],
    1
  )
); // 18
