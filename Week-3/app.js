const express = require('express');
const app = express();

app.use(express.static('sum'));

app.get('/', (req, res) => {   
    res.send('<h1>Hello My Server!</h1>');
});


app.get('/data', (req, res) => {
     const number = req.query.number;
    if (isNaN(req.query.number)) {  //isNaN() 函式會判斷某個數值是不是 NaN
        res.send('Wrong Parameter')
    } else if (number) {
        const result = ((1 + Number(req.query.number)) * Number(req.query.number))/2;
        res.send(`${result}`)
    } else 
        res.send('Lack of Parameter')
});

app.get('/myname', (req, res) => {   
    res.send('<h1>Hello My Server!</h1>');
});





 app.listen(3000, () => {
    console.log('The Website is running on local:3000')
 });  //端口號設置為3000