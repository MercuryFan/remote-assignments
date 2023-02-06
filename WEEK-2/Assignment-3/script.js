function count(input) {
  // your code here
  const countObj = {};												//建立一個空陣列：countObj
  for (let i = 0; i < input.length; i++) {		//使用for loop 去取array的每個值,每跑一次則循環次數+1 
    let elem = input[i]             					//宣告一個
    if (countObj[elem] === undefined) {
      countObj[elem] = 1;
    } else {
      countObj[elem] = countObj[elem] + 1;
    }
  }
  return countObj
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}
function groupByKey(input) {
  // your code here
  const countObj = {};
  for (const item of input) {
    if (countObj[item.key]) {
      countObj[item.key] = countObj[item.key] + item.value;
    } else {
      countObj[item.key] = item.value;
    }
  }
  return countObj;
}
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
   // should print {a:6, b:1, c:7}