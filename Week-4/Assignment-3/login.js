const dotenv = require('dotenv').config();
const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();

const app = express();
app.use('/assets', express.static('assets'));

const connection = mysql.createConnection({
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/signup')
function signUp(email, password) {
    connection.query('INSERT INTO user (email, password) VALUES("?", "?")', [email, password], (error,
        results) => {
        if (error) return res.json({ error: error });
    });
}
signUp('123@hhjj.com', '1122')

//INSERT INTO user (email, password)VALUES('aaa1234@gmail.com', '0000');

app.post('/login', encoder, function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    connection.query('SELECT * FROM user WHERE email= ? and password= ?', [email, password], function (error, results, fields) {
        if (results.length > 0) {
            res.redirect('/welcome');
        } else {
            res.redirect('/');
        }
        res.end();
    })
})

//when login is success
app.get('/welcome', function (req, res) {
    res.sendFile(__dirname + '/welcome.html')
})



//set app port
// app.listen(3000, () => {
//     console.log('The Website is running on local:3000')
//  });