const express = require('express');
const bodyParser = require('body-parser')

const app = express();



app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'pug');
app.use(express.static('sum'));
app.get('/', (req, res) => { 
    res.render('index');
    
});


app.get('/data', (req, res) => {
     const number = req.query.number;
     console.log(number);
    if (isNaN(req.query.number)) {  //isNaN() 函式會判斷某個數值是不是 NaN
        res.send('Wrong Parameter')
    } else if (number) {
        const result = ((1 + Number(req.query.number)) * Number(req.query.number))/2;
        res.send(`${result}`)
    } else 
        res.send('Lack of Parameter')
});

app.get('/myName', (req, res) => {
    res.render('myName') 
    
});
// app.get('/trackName', (req, res) => {
//     res.render('trackName')  
// });
app.post('/myName', (req, res) => {
    res.render('myName', { name: req.body.username });
});





 app.listen(3000, () => {
    console.log('The Website is running on local:3000')
 });  //端口號設置為3000