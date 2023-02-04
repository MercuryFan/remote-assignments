const dotenv = require('dotenv').config();
const mysql = require('mysql2');
const hbs = require('hbs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded({ extended: true });


const app = express();
app.use('/assets', express.static('assets'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs' );



const connection = mysql.createConnection({
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE
})

connection.connect(function(error){
    if (error) throw error
    else console.log("connected to the database successfully!")
});

app.get('/home', function (req, res) {
    res.render('index');
});



app.get('/member', function (req, res) {
    res.render('member');
});

app.post('/login', encoder, function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
        if (error) {
            console.log(error);
            res.send(error);
            return;
        }
        if(results.length <= 0) {
            return res.render('index', {
                message: 'Incorrect Email and/or Password!'
            });
        }
        res.render('member');
    });
});


app.post('/register',encoder, function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    connection.query('SELECT email FROM user WHERE email = ?', [email], (error, results) => {
        if(error) {
            console.log(error);
            return;
        }

        if(results.length > 0) {
            return res.render('register', {
                message: 'That is already in usered'
            })
        } else {
            connection.query(`INSERT INTO user (email, password) VALUES(?, ?)`, [email, password], function (error, results) {
                return res.render('index')
            })
        }
    }); 
})



app.get('/register', function (req, res) {
    res.render('register');
});




//set app port
app.listen(process.env.PORT, () => {
    console.log('The Website is running')
 });   