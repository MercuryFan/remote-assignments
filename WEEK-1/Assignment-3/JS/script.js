function countAandB(input) {
  // your code here
  let i = 0;
  let countab = 0;
  while (i < input.length) {
    let elem = input[i];
    if (elem === 'a' || elem === 'b') {
      countab = countab + 1;
    }
    i = i + 1;
  }
  return countab;
}

function toNumber(input) {
  // your code here
  let dict = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
  let i = 0;
  let arry = [];
  while (i < input.length) {
    let elem = input[i];
    arry[i] = dict[elem];
    i = i + 1;
  }
  return arry;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); /*  should print 4 (3 ‘a’ letters
and 1 ‘b’ letter)  */
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]


let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2));// should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]