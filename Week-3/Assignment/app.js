const express = require('express');  //使用node 自帶的 require 添加express 並將它設成一個變數 express
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static('sum'));


app.set('view engine', 'pug'); //在set()函式中 pub指告訴Express要用哪種模板引擎 view指的是 Expree默認會在名為views的文件夾下查找

app.get('/', (req, res) => { 
    res.send('<h1>Hello My Server!</h1>');
    
});

app.get('/data', (req, res) => {
    const number = req.query.number;
   if ( number == undefined ) { 
       res.send('Lack of Parameter')
       return;
   } 
   if (isNaN(number)) {
        res.send('Wrong Parameter')
        return; //直接return掉 就不會往下走。
   } 
    const result = ((1 + Number(req.query.number)) * Number(req.query.number))/2;
    res.send(`${result}`)
   
});


app.get('/myName', (req, res) => {
    res.render('myName', { name: req.cookies.username });
});


 app.post('/trackName', (req, res) => {
      res.cookie('username', req.body.username);
      res.redirect('/myName');//導回myName頁面

});

app.post('goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/myName');
});



 app.listen(3000, () => {
    console.log('The Website is running on local:3000')
 });  //端口號設置為3000