function avg(data) {
    // your code here
        let sum = 0;  //先假設price值的總和為 sum.
        for (let i = 0; i < data.products.length; i++) {  //重置循環次數 i = 0, 0 < data.productslength(3) , 前面兩個條件成真後,i+1進入下個循環。
         sum += data.products[i].price;							 //	總和隨著循環次數的增加,陸續由 100 + 700 + 250
     }
     let avgerage = sum / data.size;							  // 宣告 平均值 ＝ 總和除以 object 中的數量 size (3)
     return avgerage;													    //  回傳 平均值。
       
    }
        
   
   
   console.log(
    avg({
      size: 3,
      products: [
        { name: 'Product 1', price: 100 },
        { name: 'Product 2', price: 700 },
        { name: 'Product 3', price: 250 },
      ],
    })
   ); /*  // should print the average price of all products */
   