class customNode {
  constructor(value = "", count = 0) {
    this.value = value;
    this.count = count;
    this.child = {};
    this.end = false;
  }
}

class customTrie {
  constructor() {
    this.root = new customNode();
  }
  insert(str) {
    let currentNode = this.root;
    currentNode.count++;

    // 넣으려는 str 길이만큼 트라이에 넣되, 없으면 노드 새로 만들고 없으면 다음 노드로 진행
    for (let len = 0; len < str.length; len++) {
      const currentChar = str[len];
      if (currentNode.child[currentChar] === undefined) {
        currentNode.child[currentChar] = new customNode(
          currentNode.value + currentChar,
          0
        );
      }
      currentNode = currentNode.child[currentChar];
      currentNode.count++;
    }
    currentNode.end = true;
  }

  search(str) {
    let currentNode = this.root;
    for (let len = 0; len < str.length; len++) {
      const currentChar = str[len];
      if (currentNode.child[currentChar]) {
        currentNode = currentNode.child[currentChar];
      } else return 0;
    }
    return currentNode.count;
  }
}

function solution(words, queries) {
  let answer = [];
  let array = new Array(100001).fill(0);

  array.forEach((_, index) => {
    array[index + 1] = [new customTrie(), new customTrie()];
  });

  for (let ind = 0; ind < words.length; ind++) {
    const len = words[ind].length;
    array[len][0].insert(words[ind]);
    array[len][1].insert(words[ind].split("").reverse().join(""));
  }

  for (let ind = 0; ind < queries.length; ind++) {
    const length = queries[ind].length;
    const str = queries[ind].split("?").join("");
    let res =
      str.length === 0 || queries[ind][0] !== "?"
        ? array[length][0].search(str)
        : array[length][1].search([...str].reverse().join(""));
    answer.push(res);
  }
  return answer;
}

console.log(
  solution(
    ["frodo", "front", "frost", "frozen", "frame", "kakao"],
    ["fro??", "????o", "fr???", "fro???", "pro?", "?????"]
  )
);
// 3,2,4,1,0,5
