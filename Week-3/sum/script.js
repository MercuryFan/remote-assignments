
const val = document.getElementById("load").value;

function getData() {
    //利用fetch 進行連線並且取得資料！
    fetch(`http://localhost:3000/data?number=${val}`).then(function(response) {
        return response.text();
    }).then(function(data) {
        console.log(data);
    }); 
    data.innerHTML  = '<div>'   
    };

