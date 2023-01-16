function max(numbers){
  // your code here, for-loop method preferred
  let large = 0;  
  //[1.2]
  for ( let i = 0; i < numbers.length; i++ ) {
      if (numbers[i] > large) {    //number[i] = 2, large = 2
       large = numbers[i]          
     	}
  }
  return large;
}
 

function findPosition(numbers, target) {
  for ( i = 0; i < numbers.length; i++ ){
    if (numbers[i] === target ) {
      return i;
    }
  }
  return -1
}
console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7

console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
// // 表示要尋找在array[5, 2, 7, 1, 6]中,5的位置。
 console.log(max([1, 2, 4, 5])); // should print 5
 console.log(max([5, 2, 7, 1, 6])); // should print 7

 console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
 console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
 console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); 
 // should print2 (the first position)
 console.log(findPosition([5, 2, 7, 1,6], 8)); // should print -1
