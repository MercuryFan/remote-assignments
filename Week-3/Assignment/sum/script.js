
function getData() {
    const userVal = document.getElementById('load').value;
    fetch(`http://localhost:3000/data?number=${userVal}`).then(function (response) {
        return response.text();
    }).then(function (data) {
        console.log(data);
        let result = document.querySelector("#result");
        result.innerHTML = '<div>' + data + '</div>';
    });

};


