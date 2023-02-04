const dotenv = require('dotenv').config();
const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded({ extended: true });
const session = require('express-session');


const app = express();
app.use('/assets', express.static('assets'));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


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
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/member', function (req, res) {
    res.sendFile(__dirname + '/views/member.html')
})

app.post('/home', encoder, function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    
        if (email && password) {
            // Execute SQL query that'll select the account from the database based on the specified username and password
            connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
                // If there is an issue with the query, output the error
                if (error) throw error;
                // If the account exists
                if (results.length > 0) {
                    // Authenticate the user
                    request.session.loggedin = true;
                    request.session.email = email;
                    // Redirect to home page
                    response.redirect('/member');
                } else {
                    response.send('Incorrect Username and/or Password!');
                }			
                response.end();
            });
        } else {
            response.send('Please enter Username and Password!');
            response.end();
        }
})



app.post('/register',encoder, function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    

    connection.query(`INSERT INTO user (email, password) VALUES(?, ?)`, [email, password], function (error, results) {
        if (error)return res.json({ error: error });
        res.redirect('/home')
    })
    
})



app.get('/register', function (req, res) {
    res.sendFile(__dirname + '/views/register.html');
})




//set app port
app.listen(process.env.PORT, () => {
    console.log('The Website is running')
 });   