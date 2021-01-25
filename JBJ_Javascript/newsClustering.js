const getSubstingArr = (str) => {
  let substringStr = [];
  str = str.toLowerCase();
  for (let ind = 0; ind < str.length - 1; ind++) {
    if (!str[ind].match(/[a-z]/) || !str[ind + 1].match(/[a-z]/)) continue;
    substringStr.push(str.substring(ind, ind + 2));
  }
  return substringStr;
};

function solution(str1, str2) {
  let answer = 0;
  const arr1 = getSubstingArr(str1);
  const arr2 = getSubstingArr(str2);

  let intersection = [];
  let union = [];

  console.log(arr1, arr2);
  arr1.forEach((elem) => {
    if (arr2.indexOf(elem) != -1) {
      console.log(elem, arr2);
      intersection.push(arr2.splice(arr2.indexOf(elem), 1)[0]);
    }
    union.push(elem);
  });

  union = [...union, ...arr2];
  console.log(intersection, union);

  intersection = intersection.length;
  union = union.length;

  console.log(intersection, union);

  answer = Math.floor((intersection / union) * 65536);
  if (union === 0) answer = 65536;
  else if (intersection === 0) answer = 0;

  return answer;
}

// console.log(solution("FRANCE", "french"), "---------------");
// console.log(
//   solution("ab ba cc cc cc", "cc cc qw we er rt tu"),
//   "---------------"
// );
console.log(solution("handshake", "shake hands"), "---------------");
// console.log(solution("aa1+aa2", "AAAA12"), "---------------");
// console.log(solution("e=m*c^2", "e=m*c^2"), "---------------");
