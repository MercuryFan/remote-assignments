function delayedResult(n1, n2, delayTime, callback) {
    // your code here
       setTimeout(function(){
            callback(n1+n2);
        },delayTime);
   }
   
   delayedResult(4, 5, 3000, function (result) {
    console.log(result);
   }); // 9 (4+5) will be shown in the console after 3 seconds
   
   delayedResult(-5, 10, 2000, function (result) {
    console.log(result);
   }); // 5 (-5+10) will be shown in the console after 2 seconds
   
   
   
   function delayedResultPromise(n1, n2, delayTime) {
    // your code here
       let p = new Promise(function(resolve, reject) {
            setTimeout(function() {
           resolve(n1+n2);
       }, delayTime);
    });
    return p
   }
   delayedResultPromise(4, 5, 3000).then(console.log);
   // 9 (4+5) will be shown in the console after 3 seconds
   
   async function main() {
    // your code here, you should call delayedResultPromise here and
        let result = await delayedResultPromise(4, 5, 3000);
   }
   
   delayedResultPromise(4, 5, 3000).then(console.log);
   /* get the result using async/await.
   
   main(); // result will be shown in the console after <delayTime>
   seconds */