function ajax(src, callback) {
    // your code here
    fetch(src).then(callback)
}
function render(data) {
    // your code here
    // document.createElement() and appendChild() methods arepreferred.
    return data.json().then(function (data) {
        let result = document.querySelector('#result');
        result.innerHTML = '';
        for (let i = 0; i < data.length; i++) {
            let product = data[i];
            result.innerHTML += `<div> 產品名稱：${product.name} , 產品售價：${product.price} , 產品描述：${product.description}</div>`
        }
    })
}







ajax(
    'https://appworks-school.github.io/Remote-Assignment-Data/products',
    function (response) {
        render(response);
    }
); // you should get product information in JSON format and renderdata in the page